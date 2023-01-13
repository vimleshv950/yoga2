import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDs8bscsN75mB-oXxF80jL0i9zBFpkydpE",
  authDomain: "yoga-4d794.firebaseapp.com",
  projectId: "yoga-4d794",
  storageBucket: "yoga-4d794.appspot.com",
  messagingSenderId: "914871247405",
  appId: "1:914871247405:web:be8fc77da4e593dee60ea4"
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();