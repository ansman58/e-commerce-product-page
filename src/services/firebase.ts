// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGQjoG0bvWQVEvywVqeIKV_AGNiKOSyWg",
  authDomain: "e-commerce-90230.firebaseapp.com",
  projectId: "e-commerce-90230",
  storageBucket: "e-commerce-90230.appspot.com",
  messagingSenderId: "640316832206",
  appId: "1:640316832206:web:41b3dac2ce9be337c6939f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
