import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC5P6eOCTKq6Vi0wrcn6P6GWZpq1QX8hLU',
  authDomain: 'react-ecommerce-app-dd10f.firebaseapp.com',
  projectId: 'react-ecommerce-app-dd10f',
  storageBucket: 'react-ecommerce-app-dd10f.appspot.com',
  messagingSenderId: '62463810104',
  appId: '1:62463810104:web:b5e0781b8a6c66ac76a4cd',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
