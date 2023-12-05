// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAy_9c7Qf8z0otfhd3oQkpu7UrGbX2VzbI",
  authDomain: "citec-i.firebaseapp.com",
  projectId: "citec-i",
  storageBucket: "citec-i.appspot.com",
  messagingSenderId: "980381441262",
  appId: "1:980381441262:web:59e987ce56e3f0694e27ff",
  measurementId: "G-XCXLC859RM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Firestore and get a reference to the service
const db = getFirestore(app);

export { app, auth, db };
