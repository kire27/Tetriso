// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD6yosrpjrZSnY3bXpyZ45QRuJUz_QJYDo",
    authDomain: "tetriso.firebaseapp.com",
    projectId: "tetriso",
    storageBucket: "tetriso.appspot.com",
    messagingSenderId: "1040325478549",
    appId: "1:1040325478549:web:90e9aaf0a70812fe02739c",
    measurementId: "G-VE7DJZX8E2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
