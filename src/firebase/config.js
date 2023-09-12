// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCx1TdOiT8xPRnq_Pa5xx6iceiR5TNTe9E",
  authDomain: "react-journal-f6c66.firebaseapp.com",
  projectId: "react-journal-f6c66",
  storageBucket: "react-journal-f6c66.appspot.com",
  messagingSenderId: "256157901074",
  appId: "1:256157901074:web:a6c340b22294de41d953cb",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
