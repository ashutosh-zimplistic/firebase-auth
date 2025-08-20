import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { config } from 'dotenv';

config();

  const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY  ,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
  };

  // process to make .env work in react
  // 1. npm install dotenv
  // 2. create .env.local file
  // 3. add the variables to the .env.local file
  // 4. add the following to the top of the file:
  // import { config } from 'dotenv';
  // config();

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

console.log('Firebase initialized successfully');
console.log('Auth instance:', auth);

export default app;
