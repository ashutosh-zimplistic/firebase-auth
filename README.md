# Firebase Authentication Demo

A modern React application demonstrating Firebase Authentication with a beautiful UI, built using the latest Firebase SDK (v10+) and React 19.

## Features

- 🔐 **Email/Password Authentication** - Sign up and sign in with email and password
- 🌐 **Google OAuth** - One-click sign-in with Google account
- 🎨 **Modern UI** - Beautiful, responsive design with smooth animations
- ⚡ **Real-time Updates** - Instant authentication state changes
- 🛡️ **Error Handling** - Comprehensive error messages for better UX
- 📱 **Mobile Responsive** - Works perfectly on all device sizes

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- A Firebase project

## Setup Instructions

### 1. Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" and follow the setup wizard
3. Give your project a name and enable Google Analytics (optional)

### 2. Enable Authentication

1. In your Firebase project, go to **Authentication** in the left sidebar
2. Click on **Sign-in method** tab
3. Enable the following providers:
   - **Email/Password** - Enable and save
   - **Google** - Enable, add your support email, and save

### 3. Get Firebase Configuration

1. In your Firebase project, click the gear icon ⚙️ next to "Project Overview"
2. Select **Project settings**
3. Scroll down to **Your apps** section
4. Click the web icon (</>)
5. Register your app with a nickname
6. Copy the configuration object

### 4. Update Firebase Configuration

1. Open `src/firebase.js`
2. Replace the placeholder values with your actual Firebase config:

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

### 5. Install Dependencies

```bash
npm install
```

### 6. Run the Application

```bash
npm run dev
```

The app will open at `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   ├── Auth.jsx          # Main authentication component
│   └── Auth.css          # Authentication styles
├── firebase.js           # Firebase configuration
├── App.jsx               # Main app component
└── main.jsx              # App entry point
```

## Authentication Flow

1. **Initial State**: User sees sign-in form
2. **Sign In**: User can sign in with email/password or Google
3. **Sign Up**: New users can create accounts
4. **Authenticated State**: Signed-in users see welcome message and sign-out button
5. **Sign Out**: Users can sign out and return to sign-in form

## Security Features

- Password validation (minimum 6 characters)
- Email format validation
- Secure authentication state management
- Protected routes (can be extended)

## Customization

### Adding More Providers

To add more authentication providers (Facebook, Twitter, etc.):

1. Enable them in Firebase Console
2. Import the provider in `Auth.jsx`
3. Add a new button with the provider

### Styling

The app uses CSS modules and can be easily customized by modifying `Auth.css`. The design follows modern UI/UX principles with:

- Gradient backgrounds
- Smooth transitions and animations
- Responsive design
- Accessible color schemes

## Troubleshooting

### Common Issues

1. **"Firebase: Error (auth/unauthorized-domain)"**
   - Add your domain to Firebase Console → Authentication → Settings → Authorized domains

2. **Google Sign-in not working**
   - Ensure Google provider is enabled in Firebase Console
   - Check that your support email is configured

3. **Build errors**
   - Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`

### Environment Variables

For production, consider using environment variables:

```bash
# .env.local
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-domain
# ... other config values
```

Then update `firebase.js` to use them:

```javascript
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  // ... other values
};
```

## Deployment

### Vercel
```bash
npm run build
vercel --prod
```

### Netlify
```bash
npm run build
# Drag and drop the dist folder to Netlify
```

### Firebase Hosting
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
npm run build
firebase deploy
```

## Contributing

Feel free to submit issues and enhancement requests!

## License

MIT License - feel free to use this project for your own applications.

## Support

- [Firebase Documentation](https://firebase.google.com/docs)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
