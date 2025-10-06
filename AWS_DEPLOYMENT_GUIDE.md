# AWS Deployment Guide

Your React application with Firebase blog and OpenSolar integration will work perfectly on AWS. Here are the best deployment options:

## 🚀 Recommended AWS Deployment Options

### Option 1: AWS Amplify (Easiest - Recommended)

#### Why Amplify?
- ✅ **Perfect for React apps** - Built specifically for frontend frameworks
- ✅ **Automatic CI/CD** - Deploys from GitHub automatically
- ✅ **Global CDN** - Fast loading worldwide
- ✅ **Custom domains** - Easy SSL setup
- ✅ **Environment variables** - Secure config management
- ✅ **Serverless functions** - Can host the OpenSolar proxy

#### Deployment Steps:
1. **Push code to GitHub**
2. **Go to AWS Amplify Console**
3. **Connect your GitHub repository**
4. **Configure build settings**:
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm install
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: dist
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```
5. **Set environment variables** in Amplify console
6. **Deploy automatically**

#### Environment Variables for Amplify:
```
VITE_FIREBASE_API_KEY=your_firebase_key
VITE_FIREBASE_AUTH_DOMAIN=your_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_GOOGLE_PLACES_API_KEY=your_places_key
```

### Option 2: AWS S3 + CloudFront (Cost-effective)

#### Why S3 + CloudFront?
- ✅ **Very cheap** - Pay only for storage and bandwidth
- ✅ **Highly scalable** - Handles any traffic load
- ✅ **Global CDN** - Fast worldwide delivery
- ✅ **Custom domains** - Your own domain with SSL

#### Deployment Steps:
1. **Build your app**: `npm run build`
2. **Create S3 bucket** with static website hosting
3. **Upload dist folder** contents to S3
4. **Create CloudFront distribution**
5. **Configure custom domain** (optional)

#### S3 Bucket Policy:
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::your-bucket-name/*"
        }
    ]
}
```

### Option 3: AWS Lambda + API Gateway (For OpenSolar Proxy)

#### Create Lambda Function for OpenSolar Proxy:
```javascript
// lambda-opensolar-proxy.js
exports.handler = async (event) => {
    const https = require('https');
    const querystring = require('querystring');
    
    // CORS headers
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Content-Type': 'application/json'
    };
    
    // Handle preflight
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers,
            body: ''
        };
    }
    
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            headers,
            body: JSON.stringify({ error: 'Method not allowed' })
        };
    }
    
    try {
        const data = JSON.parse(event.body);
        
        const postData = querystring.stringify({
            'first_name': data.firstName || '',
            'last_name': data.lastName || '',
            'email': data.email || '',
            'phone': data.phone || '',
            'address': data.address || '',
            'notes': data.notes || '',
            'roof_type': data.roofType || '',
            'number_of_phases': data.numberOfPhases || '',
            'widget_id': 'ca8ae2d8109747b496bf67a411ac789b'
        });
        
        const options = {
            hostname: 'api.opensolar.com',
            path: '/api/lead_capture_widget/ca8ae2d8109747b496bf67a411ac789b',
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': Buffer.byteLength(postData)
            }
        };
        
        return new Promise((resolve) => {
            const req = https.request(options, (res) => {
                let responseData = '';
                res.on('data', (chunk) => responseData += chunk);
                res.on('end', () => {
                    resolve({
                        statusCode: res.statusCode < 400 ? 200 : 400,
                        headers,
                        body: JSON.stringify({
                            success: res.statusCode < 400,
                            message: res.statusCode < 400 ? 'Success' : 'Failed'
                        })
                    });
                });
            });
            
            req.on('error', (error) => {
                resolve({
                    statusCode: 500,
                    headers,
                    body: JSON.stringify({ success: false, error: error.message })
                });
            });
            
            req.write(postData);
            req.end();
        });
        
    } catch (error) {
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ success: false, error: error.message })
        };
    }
};
```

## 🔧 Configuration Updates for AWS

### Update QuoteForm for AWS Lambda:
```typescript
// Method 2: Try AWS Lambda proxy
if (!openSolarSuccess) {
  try {
    const lambdaResponse = await fetch('https://your-api-gateway-url/opensolar-proxy', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });
    
    if (lambdaResponse.ok) {
      const result = await lambdaResponse.json();
      if (result.success) {
        openSolarSuccess = true;
        console.log('OpenSolar submission via AWS Lambda successful');
      }
    }
  } catch (lambdaError) {
    console.warn('AWS Lambda proxy submission failed:', lambdaError);
  }
}
```

## 📋 Complete AWS Deployment Checklist

### Pre-deployment:
- [ ] Build the app: `npm run build`
- [ ] Test locally: `npm run preview`
- [ ] Verify Firebase configuration
- [ ] Test OpenSolar integration
- [ ] Check all environment variables

### AWS Amplify Deployment:
- [ ] Create AWS account
- [ ] Connect GitHub repository
- [ ] Configure build settings
- [ ] Set environment variables
- [ ] Deploy and test
- [ ] Configure custom domain (optional)

### S3 + CloudFront Deployment:
- [ ] Create S3 bucket
- [ ] Enable static website hosting
- [ ] Upload build files
- [ ] Create CloudFront distribution
- [ ] Configure custom domain
- [ ] Set up SSL certificate

### Lambda Proxy (Optional):
- [ ] Create Lambda function
- [ ] Set up API Gateway
- [ ] Configure CORS
- [ ] Test proxy endpoint
- [ ] Update frontend to use Lambda URL

## 🌐 Domain Configuration

### Custom Domain Setup:
1. **Purchase domain** (Route 53 or external)
2. **Create SSL certificate** (AWS Certificate Manager)
3. **Configure DNS** (Route 53 or your DNS provider)
4. **Update Firebase/Google APIs** with new domain

### Firebase Configuration Update:
- Add your AWS domain to Firebase authorized domains
- Update Google Places API restrictions if needed

## 💰 Cost Estimation

### AWS Amplify:
- **Free tier**: 1000 build minutes/month, 15GB served/month
- **Paid**: ~$0.01 per build minute, ~$0.15 per GB served

### S3 + CloudFront:
- **S3**: ~$0.023 per GB stored
- **CloudFront**: ~$0.085 per GB transferred
- **Very cost-effective** for most websites

### Lambda (for proxy):
- **Free tier**: 1M requests/month, 400,000 GB-seconds
- **Paid**: ~$0.20 per 1M requests

## 🚀 Quick Start Commands

### Option A: One-Click CloudFormation Deployment (NEW - Recommended)
```bash
# 1. Make deployment script executable
chmod +x deploy-to-aws.sh

# 2. Configure your domain in the script
# Edit deploy-to-aws.sh and change DOMAIN_NAME="your-domain.com"

# 3. Deploy everything at once (S3, CloudFront, Lambda, API Gateway)
./deploy-to-aws.sh
```

### Option B: AWS Amplify (Easiest)
```bash
# 1. Push code to GitHub first
git add .
git commit -m "Ready for AWS deployment"
git push origin main

# 2. Go to AWS Amplify Console
# 3. Connect GitHub repository (amplify.yml is already configured)
# 4. Add environment variables from .env.production
# 5. Deploy automatically
```

### Option C: Manual S3 Deployment
```bash
# Build the app
npm run build

# Install AWS CLI and configure credentials
aws configure

# Upload to S3
aws s3 sync dist/ s3://your-bucket-name --delete
```

## 🔒 Security Best Practices

- ✅ **Environment variables** - Never commit API keys
- ✅ **HTTPS only** - Force SSL/TLS
- ✅ **CORS configuration** - Restrict origins
- ✅ **Firebase security rules** - Protect database
- ✅ **API key restrictions** - Limit Google API usage

## 📁 New AWS Deployment Files Created

I've created several files to make your AWS deployment seamless:

### Core Deployment Files:
- **`deploy-to-aws.sh`** - One-click deployment script
- **`cloudformation-template.yaml`** - Complete infrastructure as code
- **`amplify.yml`** - Amplify build configuration
- **`.env.production`** - Production environment variables template

### What the Automated Deployment Includes:
- ✅ **S3 bucket** for static website hosting
- ✅ **CloudFront CDN** for global fast delivery
- ✅ **Lambda function** for OpenSolar proxy
- ✅ **API Gateway** for serverless API
- ✅ **SSL certificate** for HTTPS
- ✅ **Proper CORS** configuration
- ✅ **Cache invalidation** for updates

### Usage:
1. **Edit `deploy-to-aws.sh`** - Set your domain name
2. **Update `.env.production`** - Add your API keys
3. **Run `./deploy-to-aws.sh`** - Deploy everything
4. **Your site is live!** 🎉

## 🎯 Final Result

Your application will work perfectly on AWS with all features intact:
- ✅ Firebase blog system with admin panel
- ✅ Google Places autocomplete for addresses
- ✅ OpenSolar integration with multiple fallbacks
- ✅ Email backup system for lead capture
- ✅ Responsive design for all devices
- ✅ Professional UI/UX with animations
- ✅ Global CDN for fast loading worldwide
- ✅ Automatic SSL/HTTPS security
- ✅ Serverless architecture for scalability