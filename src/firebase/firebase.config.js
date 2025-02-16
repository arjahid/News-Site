// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiNgiwruj0whHWt82z15tHnZALRnn8Di0",
  authDomain: "dragon-news-b35a9.firebaseapp.com",
  projectId: "dragon-news-b35a9",
  storageBucket: "dragon-news-b35a9.firebasestorage.app",
  messagingSenderId: "294124823794",
  appId: "1:294124823794:web:736de14e288e1692c29c6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)