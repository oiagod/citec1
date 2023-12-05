// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

export { app, auth };