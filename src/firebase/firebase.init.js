// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAA2_fL7YDhDQH9wM-xrDOwlwDiCeuWpcQ",
  authDomain: "gipo-ai-model.firebaseapp.com",
  projectId: "gipo-ai-model",
  storageBucket: "gipo-ai-model.firebasestorage.app",
  messagingSenderId: "936315373519",
  appId: "1:936315373519:web:2c21786af21b573cfe74ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);