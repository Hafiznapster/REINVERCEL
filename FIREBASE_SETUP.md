# Firebase Setup Guide for Blog System

## 1. Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project"
3. Enter your project name (e.g., "your-company-blog")
4. Enable Google Analytics (optional)
5. Click "Create project"

## 2. Enable Authentication

1. In your Firebase project, go to "Authentication" in the left sidebar
2. Click "Get started"
3. Go to "Sign-in method" tab
4. Enable "Email/Password" provider
5. Click "Save"

### Create Admin User
1. Go to "Users" tab in Authentication
2. Click "Add user"
3. Enter email and password for your admin account
4. Click "Add user"

## 3. Create Firestore Database

1. Go to "Firestore Database" in the left sidebar
2. Click "Create database"
3. Choose "Start in test mode" (we'll secure it later)
4. Select your preferred location
5. Click "Done"

### Set up Security Rules
1. Go to "Rules" tab in Firestore
2. Replace the default rules with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read access to published blogs for everyone
    match /blogs/{document} {
      allow read: if resource.data.status == "published" || request.auth != null;
      allow write: if request.auth != null;
    }
  }
}
```

## 4. Enable Storage

1. Go to "Storage" in the left sidebar
2. Click "Get started"
3. Choose "Start in test mode"
4. Select your preferred location
5. Click "Done"

### Set up Storage Rules
1. Go to "Rules" tab in Storage
2. Replace the default rules with:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /blog-images/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

## 5. Get Configuration Keys

1. Go to "Project settings" (gear icon in left sidebar)
2. Scroll down to "Your apps" section
3. Click "Web" icon (</>) to add a web app
4. Enter app nickname (e.g., "Blog App")
5. Click "Register app"
6. Copy the configuration object

## 6. Update Environment Variables

Update your `.env` file with the configuration values:

```env
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## 7. Test the Setup

1. Start your development server: `npm run dev`
2. Navigate to `/adminblog` and try logging in with your admin credentials
3. Create a test blog post
4. Check if it appears on the `/blogs` page

## 8. Production Security (Important!)

Before deploying to production:

1. **Update Firestore Rules** to be more restrictive:
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /blogs/{document} {
      allow read: if resource.data.status == "published" || request.auth != null;
      allow create, update, delete: if request.auth != null;
    }
  }
}
```

2. **Update Storage Rules**:
```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /blog-images/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null 
        && request.resource.size < 5 * 1024 * 1024
        && request.resource.contentType.matches('image/.*');
    }
  }
}
```

3. **Environment Variables**: Make sure your production environment has the correct Firebase configuration

## Troubleshooting

### Common Issues:

1. **"Permission denied" errors**: Check your Firestore and Storage rules
2. **Authentication not working**: Verify Email/Password provider is enabled
3. **Images not uploading**: Check Storage rules and file size limits
4. **Build errors**: Ensure all environment variables are set correctly

### Useful Firebase CLI Commands:

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase in your project
firebase init

# Deploy security rules
firebase deploy --only firestore:rules
firebase deploy --only storage
```

## Next Steps

1. Test all functionality thoroughly
2. Add more admin users if needed
3. Consider implementing role-based access control
4. Set up Firebase Analytics for blog post tracking
5. Configure custom domain for Firebase Hosting (optional)