// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDNlQa794zfmDm-r8bDO5ZUSWUSCQhsmLY",
    authDomain: "monamie-9cd2c.firebaseapp.com",
    projectId: "monamie-9cd2c",
    storageBucket: "monamie-9cd2c.appspot.com",
    messagingSenderId: "343315018225",
    appId: "1:343315018225:web:46078cf2e0b68104289450"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();
export default app
