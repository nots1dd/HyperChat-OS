// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwtJWwEhM4X6Lc440OpHRqwvqBNNHOWnw",
  authDomain: "appchattest-cf902.firebaseapp.com",
  projectId: "appchattest-cf902",
  storageBucket: "appchattest-cf902.appspot.com",
  messagingSenderId: "1066851019622",
  appId: "1:1066851019622:web:765483f026027dc68ef6a7",
  measurementId: "G-KE5LB4SSSW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);