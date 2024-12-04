// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3eMQ5SwClrA1LnaedJN10uebrCSDeMV8",
  authDomain: "coffee-store-8cec4.firebaseapp.com",
  projectId: "coffee-store-8cec4",
  storageBucket: "coffee-store-8cec4.firebasestorage.app",
  messagingSenderId: "1067312753671",
  appId: "1:1067312753671:web:ec8379b8a4c4954de88ea2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);