// AWS Lambda function for OpenSolar API proxy
// Deploy this to AWS Lambda and connect via API Gateway

const https = require('https');
const querystring = require('querystring');

exports.handler = async (event) => {
    console.log('OpenSolar proxy called with:', JSON.stringify(event, null, 2));
    
    // CORS headers
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Content-Type': 'application/json'
    };
    
    // Handle preflight OPTIONS request
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({ message: 'CORS preflight successful' })
        };
    }
    
    // Only allow POST requests
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            headers,
            body: JSON.stringify({ error: 'Method not allowed' })
        };
    }
    
    try {
        // Parse request body
        const data = JSON.parse(event.body);
        console.log('Parsed data:', data);
        
        // Validate required fields
        if (!data.firstName || !data.lastName || !data.email || !data.phone || !data.address) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ 
                    success: false, 
                    error: 'Missing required fields' 
                })
            };
        }
        
        // Prepare form data for OpenSolar
        const postData = querystring.stringify({
            'first_name': data.firstName,
            'last_name': data.lastName,
            'email': data.email,
            'phone': data.phone,
            'address': data.address,
            'notes': data.notes || '',
            'roof_type': data.roofType || '',
            'number_of_phases': data.numberOfPhases || '',
            'widget_id': 'ca8ae2d8109747b496bf67a411ac789b'
        });
        
        console.log('Sending to OpenSolar:', postData);
        
        // Configure HTTPS request to OpenSolar
        const options = {
            hostname: 'api.opensolar.com',
            path: '/api/lead_capture_widget/ca8ae2d8109747b496bf67a411ac789b',
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': Buffer.byteLength(postData),
                'User-Agent': 'AWS-Lambda-Proxy/1.0'
            },
            timeout: 30000
        };
        
        // Make request to OpenSolar API
        return new Promise((resolve) => {
            const req = https.request(options, (res) => {
                let responseData = '';
                
                res.on('data', (chunk) => {
                    responseData += chunk;
                });
                
                res.on('end', () => {
                    console.log('OpenSolar response status:', res.statusCode);
                    console.log('OpenSolar response data:', responseData);
                    
                    const success = res.statusCode >= 200 && res.statusCode < 400;
                    
                    resolve({
                        statusCode: 200,
                        headers,
                        body: JSON.stringify({
                            success: success,
                            message: success ? 'Quote submitted successfully to OpenSolar' : 'Failed to submit to OpenSolar',
                            openSolarStatus: res.statusCode,
                            timestamp: new Date().toISOString()
                        })
                    });
                });
            });
            
            req.on('error', (error) => {
                console.error('Request error:', error);
                resolve({
                    statusCode: 200, // Return 200 to avoid frontend errors
                    headers,
                    body: JSON.stringify({ 
                        success: false, 
                        error: 'Network error connecting to OpenSolar',
                        details: error.message 
                    })
                });
            });
            
            req.on('timeout', () => {
                console.error('Request timeout');
                req.destroy();
                resolve({
                    statusCode: 200,
                    headers,
                    body: JSON.stringify({ 
                        success: false, 
                        error: 'Request timeout to OpenSolar' 
                    })
                });
            });
            
            // Send the request
            req.write(postData);
            req.end();
        });
        
    } catch (error) {
        console.error('Lambda error:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ 
                success: false, 
                error: 'Internal server error',
                details: error.message 
            })
        };
    }
};