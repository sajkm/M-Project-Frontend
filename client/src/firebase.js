
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'vsk-estate.firebaseapp.com',
  projectId: 'vsk-estate',
  storageBucket: 'vsk-estate.appspot.com',
  messagingSenderId: '346117533279',
  appId: '1:346117533279:web:d07a25ab61faa10184f5ea',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
