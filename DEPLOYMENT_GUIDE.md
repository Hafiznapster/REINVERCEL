# Website Deployment Guide

This guide will help you deploy your React website to your network using various methods.

## 🚀 Quick Deployment Options

### Option 1: Local Network Deployment (Recommended for Testing)

#### Step 1: Build the Project
```bash
npm run build
```

#### Step 2: Serve on Network
```bash
# Install a simple HTTP server globally
npm install -g serve

# Serve the built files on your network
serve -s dist -l 3000 --host 0.0.0.0
```

Your website will be available at:
- Local: `http://localhost:3000`
- Network: `http://YOUR_IP_ADDRESS:3000`

To find your IP address:
- **Windows**: `ipconfig` (look for IPv4 Address)
- **Mac/Linux**: `ifconfig` or `ip addr show`

### Option 2: Development Server on Network

```bash
# Run development server accessible from network
npm run dev -- --host 0.0.0.0 --port 3000
```

Your website will be available at:
- Local: `http://localhost:3000`
- Network: `http://YOUR_IP_ADDRESS:3000`

### Option 3: Using Python HTTP Server (If you have Python)

```bash
# Build first
npm run build

# Navigate to dist folder
cd dist

# Python 3
python -m http.server 3000 --bind 0.0.0.0

# Python 2
python -m SimpleHTTPServer 3000
```

### Option 4: Using Node.js Express Server

Create a simple server file:

```javascript
// server.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files from dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Handle React Router (return index.html for all routes)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
  console.log(`Network access: http://YOUR_IP_ADDRESS:${PORT}`);
});
```

Then run:
```bash
npm install express
node server.js
```

## 🌐 Production Deployment Options

### Option 1: Hostinger (Your Current Host)

#### Step 1: Build the Project
```bash
npm run build
```

#### Step 2: Upload to Hostinger
1. Compress the `dist` folder contents
2. Upload to your Hostinger `public_html` directory
3. Extract the files directly in `public_html`

#### Step 3: Configure .htaccess for React Router
Create `.htaccess` file in `public_html`:
```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QR,L]
```

### Option 2: Netlify (Free & Easy)

#### Method 1: Drag & Drop
1. Build your project: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag the `dist` folder to Netlify
4. Your site is live!

#### Method 2: Git Integration
1. Push your code to GitHub
2. Connect Netlify to your GitHub repo
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy automatically on every push

### Option 3: Vercel (Free & Fast)

#### Method 1: CLI
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow the prompts
```

#### Method 2: Git Integration
1. Push code to GitHub
2. Import project on [vercel.com](https://vercel.com)
3. Auto-deploys on every push

### Option 4: GitHub Pages

#### Step 1: Install gh-pages
```bash
npm install --save-dev gh-pages
```

#### Step 2: Update package.json
```json
{
  "homepage": "https://yourusername.github.io/your-repo-name",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

#### Step 3: Deploy
```bash
npm run deploy
```

## 🔧 Environment Configuration

### For Production Deployment:

#### Step 1: Create Production Environment File
Create `.env.production`:
```env
# Firebase Configuration (Production)
VITE_FIREBASE_API_KEY=your_production_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_production_domain
VITE_FIREBASE_PROJECT_ID=your_production_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_production_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_production_sender_id
VITE_FIREBASE_APP_ID=your_production_app_id
```

#### Step 2: Update Build Script
```json
{
  "scripts": {
    "build": "vite build",
    "build:prod": "vite build --mode production"
  }
}
```

## 🛡️ Security Considerations

### 1. Environment Variables
- Never commit `.env` files to version control
- Use different Firebase projects for development and production
- Keep API keys secure

### 2. Firebase Security Rules
Update your Firestore rules for production:
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /blogs/{document} {
      allow read: if resource.data.status == "published" || request.auth != null;
      allow write: if request.auth != null;
    }
  }
}
```

### 3. HTTPS
- Always use HTTPS in production
- Most hosting providers provide free SSL certificates

## 📱 Mobile & Network Access

### Finding Your Network IP:
```bash
# Windows
ipconfig

# Mac/Linux
ifconfig
# or
hostname -I
```

### Firewall Configuration:
Make sure port 3000 (or your chosen port) is open in your firewall.

### Router Configuration:
For external access, you may need to configure port forwarding on your router.

## 🚀 Quick Start Commands

### For Local Network Testing:
```bash
# Build and serve
npm run build
npx serve -s dist -l 3000 --host 0.0.0.0
```

### For Development on Network:
```bash
# Development server on network
npm run dev -- --host 0.0.0.0
```

### For Production Build:
```bash
# Build for production
npm run build

# The dist folder contains your deployable files
```

## 📞 Support

If you need help with deployment:
1. Check the console for any errors
2. Ensure all environment variables are set
3. Verify Firebase configuration
4. Test locally before deploying

## 🎯 Recommended Deployment Flow

1. **Development**: Use `npm run dev -- --host 0.0.0.0` for network testing
2. **Staging**: Deploy to Netlify or Vercel for testing
3. **Production**: Deploy to your preferred hosting provider

Your website includes:
- ✅ Blog system with Firebase
- ✅ Quote form with OpenSolar integration
- ✅ Responsive design
- ✅ Professional UI/UX
- ✅ SEO-friendly structure

Choose the deployment method that best fits your needs!