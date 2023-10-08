// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyZEAdwyZnz0epCg7aULy5zlx3qoY5UN0",
  authDomain: "sports-management-website.firebaseapp.com",
  projectId: "sports-management-website",
  storageBucket: "sports-management-website.appspot.com",
  messagingSenderId: "974966115950",
  appId: "1:974966115950:web:64bed7ceb26bfc8f93607f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;