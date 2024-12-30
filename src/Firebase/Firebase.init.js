// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcj1TbGy0Cl49ovlLTL-T5B1D7hDcRdjw",
  authDomain: "coffee-store-79c97.firebaseapp.com",
  projectId: "coffee-store-79c97",
  storageBucket: "coffee-store-79c97.firebasestorage.app",
  messagingSenderId: "827865188243",
  appId: "1:827865188243:web:4c23d943b5010f5023ca66",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

