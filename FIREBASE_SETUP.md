# Firebase Setup Guide

## Quick Configuration

### 1. Environment Variables (Recommended)

Create a `.env.local` file in your project root:

```bash
# .env.local
VITE_FIREBASE_API_KEY=your-api-key-here
VITE_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
VITE_FIREBASE_APP_ID=your-app-id
```

Then update `src/firebase.js` to use environment variables:

```javascript
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};
```

### 2. Direct Configuration (Quick Start)

Alternatively, directly edit `src/firebase.js`:

```javascript
const firebaseConfig = {
  apiKey: "your-actual-api-key",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};
```

## Firebase Console Steps

1. **Create Project**: Go to [Firebase Console](https://console.firebase.google.com/)
2. **Add Web App**: Click web icon (</>) and register your app
3. **Enable Auth**: Go to Authentication → Sign-in method
4. **Enable Providers**:
   - Email/Password: Enable
   - Google: Enable and configure
5. **Copy Config**: Project settings → Your apps → SDK setup and config

## Testing

After configuration:
1. Run `npm run dev`
2. Try signing up with email/password
3. Test Google sign-in
4. Verify sign-out functionality

## Security Notes

- Never commit `.env.local` to version control
- Add `.env.local` to your `.gitignore`
- Use environment variables in production
- Restrict Firebase Auth domains in production
