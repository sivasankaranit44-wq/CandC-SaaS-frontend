// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBEscDmsF6vKrMh1DoAf0vekJSwuzbWNY4",
  authDomain: "candc-com.firebaseapp.com",
  projectId: "candc-com",
  storageBucket: "candc-com.firebasestorage.app",
  messagingSenderId: "502469910245",
  appId: "1:502469910245:web:7d0ffbc414c085fceebe0c",
  measurementId: "G-F7LRSS70KB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// exprt app for authentication.
export const auth = getAuth(app)
