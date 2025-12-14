# Firebase Setup Guide

This guide will help you set up Firebase for your British Way website to enable production-ready data storage.

## Why Firebase?

- **Cloud-based**: Data is stored in the cloud, accessible from anywhere
- **Real-time updates**: Changes appear instantly across all users
- **Scalable**: Handles growth without infrastructure changes
- **Secure**: Built-in security rules and authentication
- **Free tier**: Generous free tier for small to medium projects

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click **"Add project"** or **"Create a project"**
3. Enter your project name: `britishway-website` (or any name you prefer)
4. Click **Continue**
5. Disable Google Analytics (optional, you can enable it later if needed)
6. Click **Create project**
7. Wait for the project to be created, then click **Continue**

## Step 2: Register Your Web App

1. In your Firebase project dashboard, click the **Web icon** (`</>`)
2. Register your app:
   - App nickname: `British Way Website`
   - Firebase Hosting: You can skip this for now (we're using cPanel)
3. Click **Register app**
4. **Copy the Firebase configuration object** - you'll need this in the next step

## Step 3: Configure Firebase in Your Project

### Option A: Using Environment Variables (Recommended for Production)

1. Create a `.env` file in your project root (if it doesn't exist)
2. Add your Firebase configuration:

```env
REACT_APP_FIREBASE_API_KEY=your-api-key-here
REACT_APP_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=123456789
REACT_APP_FIREBASE_APP_ID=1:123456789:web:abcdef
```

3. Replace the values with your actual Firebase config values

### Option B: Direct Configuration (For Quick Testing)

1. Open `src/config/firebase.js`
2. Replace the placeholder values with your actual Firebase configuration:

```javascript
const firebaseConfig = {
  apiKey: "your-actual-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};
```

## Step 4: Set Up Firestore Database

1. In Firebase Console, go to **Firestore Database** (left sidebar)
2. Click **Create database**
3. Choose **Start in test mode** (for now - we'll add security rules later)
4. Select a location (choose the closest to your users)
5. Click **Enable**

## Step 5: Set Up Firestore Collections

The app will automatically create collections when you first add data, but you can also create them manually:

### Collections Needed:
- `courses` - Stores course information
- `events` - Stores event information
- `news` - Stores news articles
- `formSubmissions` - Stores contact form and registration form submissions

### To create collections manually:
1. In Firestore Database, click **Start collection**
2. Collection ID: `courses`
3. Add a test document (it will be replaced when you add real data)
4. Repeat for `events` and `news` collections

## Step 6: Set Up Security Rules (Important!)

1. In Firestore Database, go to the **Rules** tab
2. Replace the default rules with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Courses - Read: public, Write: authenticated only
    match /courses/{document=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    
    // Events - Read: public, Write: authenticated only
    match /events/{document=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    
    // News - Read: public, Write: authenticated only
    match /news/{document=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    
    // Form Submissions - Read: authenticated only, Write: public (for form submissions)
    match /formSubmissions/{document=**} {
      allow read: if request.auth != null;
      allow write: if true;
    }
  }
}
```

3. Click **Publish**

**Note**: For now, we're allowing public reads. For production, you may want to add authentication for writes. The admin dashboard uses localStorage for authentication, so you may need to implement Firebase Authentication later for better security.

## Step 7: Test Your Setup

1. Start your development server: `npm start`
2. Navigate to the admin dashboard: `http://localhost:3000/admin/login`
3. Try adding a course, event, or news article
4. Check Firebase Console → Firestore Database to see if data appears

## Step 8: Deploy to cPanel

1. Build your project: `npm run build`
2. Upload the `build` folder contents to your cPanel `public_html` directory
3. Make sure your `.env` file is included, or update `firebase.js` with production values

**Important**: For production, use environment variables or ensure your Firebase config is properly set in the build.

## Troubleshooting

### Error: "Firebase: Error (auth/unauthorized-domain)"
- Go to Firebase Console → Authentication → Settings → Authorized domains
- Add your domain (e.g., `yourdomain.com`)

### Error: "Missing or insufficient permissions"
- Check your Firestore security rules
- Make sure rules allow read/write operations as needed

### Data not appearing
- Check browser console for errors
- Verify Firebase configuration is correct
- Check Firestore Database in Firebase Console
- Ensure collections exist

### Build errors
- Make sure Firebase is installed: `npm install firebase`
- Check that all imports are correct
- Verify environment variables are set (if using .env)

## Security Best Practices

1. **Never commit `.env` file** - Add it to `.gitignore`
2. **Use environment variables** for production
3. **Set up proper Firestore security rules**
4. **Consider Firebase Authentication** for admin access
5. **Enable Firebase App Check** for additional security

## Firebase Pricing

Firebase has a generous free tier:
- **Firestore**: 50K reads/day, 20K writes/day, 20K deletes/day (free)
- **Storage**: 5GB storage, 1GB/day downloads (free)
- **Hosting**: 10GB storage, 360MB/day transfer (free)

For most small to medium websites, the free tier is sufficient.

## Next Steps

1. Set up Firebase Authentication for admin login
2. Configure Firebase Storage for image uploads
3. Set up Firebase Analytics (optional)
4. Configure custom domain in Firebase (if using Firebase Hosting)

## Support

- [Firebase Documentation](https://firebase.google.com/docs)
- [Firestore Documentation](https://firebase.google.com/docs/firestore)
- [Firebase Console](https://console.firebase.google.com/)
