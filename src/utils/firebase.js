// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkRNqYhPptGK-wkRep_Ik-SgUgJlxg2-g",
  authDomain: "netflixai-83bd5.firebaseapp.com",
  projectId: "netflixai-83bd5",
  storageBucket: "netflixai-83bd5.firebasestorage.app",
  messagingSenderId: "286279441036",
  appId: "1:286279441036:web:f4441403c06a7d050bf9a9",
  measurementId: "G-HL9YNGQ36D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();