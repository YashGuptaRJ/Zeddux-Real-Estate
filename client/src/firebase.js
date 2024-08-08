// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-7c021.firebaseapp.com",
  projectId: "mern-estate-7c021",
  storageBucket: "mern-estate-7c021.appspot.com",
  messagingSenderId: "893743837760",
  appId: "1:893743837760:web:ce4561ad9ceda6e395e5a5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);