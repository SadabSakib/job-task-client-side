// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClAI9SHRYBV5NhXI1QFSjQ5S7EP7MGr4A",
  authDomain: "job-task-8af86.firebaseapp.com",
  projectId: "job-task-8af86",
  storageBucket: "job-task-8af86.firebasestorage.app",
  messagingSenderId: "653697275891",
  appId: "1:653697275891:web:e0a3f95e980d54a179a486",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

