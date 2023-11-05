// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuKiN7okO1LrFUi-MWt3RRLnxQ3wTb8jI",
  authDomain: "restaurant-management-40ba5.firebaseapp.com",
  projectId: "restaurant-management-40ba5",
  storageBucket: "restaurant-management-40ba5.appspot.com",
  messagingSenderId: "785013150556",
  appId: "1:785013150556:web:9b45058f3f9ba9f7f06799"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;