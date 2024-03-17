// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQj9SD0eMZs9jEWb7Qgi_yvtmnP24v-Uo",
  authDomain: "test1-464f9.firebaseapp.com",
  projectId: "test1-464f9",
  storageBucket: "test1-464f9.appspot.com",
  messagingSenderId: "632783661499",
  appId: "1:632783661499:web:cdec9639002ec44d237c9e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();