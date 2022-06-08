import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MSG_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// if (process.env.NODE_ENV === 'development') {
//   window.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
// }
initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider(
    process.env.REACT_APP_FIREBASE_RECAPTCHA_V3_SITE_KEY
  ),
  isTokenAutoRefreshEnabled: true,
});

export const db = getFirestore(app);
export const auth = getAuth();
