// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-C5LiItlozMBNSKhGKA-XXMtPwMwEj9A",
  authDomain: "standby-c50ba.firebaseapp.com",
  databaseURL: "https://standby-c50ba-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "standby-c50ba",
  storageBucket: "standby-c50ba.appspot.com",
  messagingSenderId: "627233552935",
  appId: "1:627233552935:web:a89e271cbd1e22ec3bac02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };