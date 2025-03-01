// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBXqYLXVvr_XOQyk_5sr2sDvJWWuG0C-t8",
    authDomain: "sms-otp-proj.firebaseapp.com",
    projectId: "sms-otp-proj",
    storageBucket: "sms-otp-proj.firebasestorage.app",
    messagingSenderId: "579446312354",
    appId: "1:579446312354:web:f36095a11ea3ef5fec76fb",
    measurementId: "G-2MNMMC6X67"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, RecaptchaVerifier, signInWithPhoneNumber };