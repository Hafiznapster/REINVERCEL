#!/bin/bash

# AWS Deployment Script for Solar Energy Website
# Make sure you have AWS CLI configured with proper credentials

set -e

echo "🚀 Starting AWS Deployment..."

# Configuration
STACK_NAME="solar-energy-website"
DOMAIN_NAME="your-domain.com"  # Change this to your domain
REGION="us-east-1"  # Change if needed

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}📋 Deployment Configuration:${NC}"
echo "Stack Name: $STACK_NAME"
echo "Domain: $DOMAIN_NAME"
echo "Region: $REGION"
echo ""

# Check if AWS CLI is installed
if ! command -v aws &> /dev/null; then
    echo -e "${RED}❌ AWS CLI is not installed. Please install it first.${NC}"
    exit 1
fi

# Check if user is logged in to AWS
if ! aws sts get-caller-identity &> /dev/null; then
    echo -e "${RED}❌ AWS credentials not configured. Run 'aws configure' first.${NC}"
    exit 1
fi

echo -e "${GREEN}✅ AWS CLI configured${NC}"

# Build the React app
echo -e "${YELLOW}🔨 Building React application...${NC}"
npm run build

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Build successful${NC}"
else
    echo -e "${RED}❌ Build failed${NC}"
    exit 1
fi

# Deploy CloudFormation stack
echo -e "${YELLOW}☁️ Deploying CloudFormation stack...${NC}"
aws cloudformation deploy \
    --template-file cloudformation-template.yaml \
    --stack-name $STACK_NAME \
    --parameter-overrides DomainName=$DOMAIN_NAME \
    --capabilities CAPABILITY_IAM \
    --region $REGION

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ CloudFormation stack deployed${NC}"
else
    echo -e "${RED}❌ CloudFormation deployment failed${NC}"
    exit 1
fi

# Get stack outputs
echo -e "${YELLOW}📊 Getting stack outputs...${NC}"
BUCKET_NAME=$(aws cloudformation describe-stacks \
    --stack-name $STACK_NAME \
    --region $REGION \
    --query 'Stacks[0].Outputs[?OutputKey==`S3BucketName`].OutputValue' \
    --output text)

API_URL=$(aws cloudformation describe-stacks \
    --stack-name $STACK_NAME \
    --region $REGION \
    --query 'Stacks[0].Outputs[?OutputKey==`ApiGatewayURL`].OutputValue' \
    --output text)

WEBSITE_URL=$(aws cloudformation describe-stacks \
    --stack-name $STACK_NAME \
    --region $REGION \
    --query 'Stacks[0].Outputs[?OutputKey==`WebsiteURL`].OutputValue' \
    --output text)

echo "S3 Bucket: $BUCKET_NAME"
echo "API URL: $API_URL"
echo "Website URL: $WEBSITE_URL"

# Upload files to S3
echo -e "${YELLOW}📤 Uploading files to S3...${NC}"
aws s3 sync dist/ s3://$BUCKET_NAME --delete --region $REGION

# Copy index.html as error.html for proper routing
aws s3 cp s3://$BUCKET_NAME/index.html s3://$BUCKET_NAME/error.html --region $REGION

# Set proper content types and cache headers
aws s3 cp s3://$BUCKET_NAME/index.html s3://$BUCKET_NAME/index.html \
    --metadata-directive REPLACE \
    --cache-control "no-cache, no-store, must-revalidate" \
    --region $REGION

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Files uploaded to S3 with proper routing${NC}"
else
    echo -e "${RED}❌ S3 upload failed${NC}"
    exit 1
fi

# Invalidate CloudFront cache
echo -e "${YELLOW}🔄 Invalidating CloudFront cache...${NC}"
DISTRIBUTION_ID=$(aws cloudfront list-distributions \
    --query "DistributionList.Items[?Origins.Items[0].DomainName=='$BUCKET_NAME.s3.$REGION.amazonaws.com'].Id" \
    --output text)

if [ ! -z "$DISTRIBUTION_ID" ]; then
    aws cloudfront create-invalidation \
        --distribution-id $DISTRIBUTION_ID \
        --paths "/*" > /dev/null
    echo -e "${GREEN}✅ CloudFront cache invalidated${NC}"
fi

echo ""
echo -e "${GREEN}🎉 Deployment Complete!${NC}"
echo ""
echo -e "${YELLOW}📋 Next Steps:${NC}"
echo "1. Update your environment variables:"
echo "   - Set REACT_APP_API_URL to: $API_URL"
echo "2. Configure your OpenSolar API key in AWS Systems Manager"
echo "3. Set up your custom domain in CloudFront (optional)"
echo ""
echo -e "${GREEN}🌐 Your website is live at: https://$WEBSITE_URL${NC}"
echo ""
echo -e "${YELLOW}💡 Useful Commands:${NC}"
echo "- View logs: aws logs tail /aws/lambda/opensolar-proxy --follow"
echo "- Update stack: ./deploy-to-aws.sh"
echo "- Delete stack: aws cloudformation delete-stack --stack-name $STACK_NAME"