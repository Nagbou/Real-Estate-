// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-6a1f2.firebaseapp.com",
  projectId: "mern-estate-6a1f2",
  storageBucket: "mern-estate-6a1f2.appspot.com",
  messagingSenderId: "155686153305",
  appId: "1:155686153305:web:ebb8f95b57ec2ac1bc1548"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);