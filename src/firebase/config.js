// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGvtRFuDkrHQsq2B3aG1xV4iVAvKNohDs",
  authDomain: "chicthreads-b1a64.firebaseapp.com",
  projectId: "chicthreads-b1a64",
  storageBucket: "chicthreads-b1a64.appspot.com",
  messagingSenderId: "528839189944",
  appId: "1:528839189944:web:7028bb9b06fdceaa36db4d",
  measurementId: "G-STLSMN06V0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);