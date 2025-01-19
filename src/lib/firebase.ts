// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1EUbCuwzZLc7_9W87ObyHULkT_R7AE1w",
  authDomain: "portfolio-farizio-c264d.firebaseapp.com",
  projectId: "portfolio-farizio-c264d",
  storageBucket: "portfolio-farizio-c264d.firebasestorage.app",
  messagingSenderId: "47064133298",
  appId: "1:47064133298:web:bd94a845792fb67512e3ab",
  measurementId: "G-ZN191HEPZ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = getFirestore(app);

export { db, app }