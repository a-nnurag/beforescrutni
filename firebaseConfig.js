// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVVvaTKuuGRFfGax2hHVYdY-AovY3QHUQ",
  authDomain: "edcfin-1bb5e.firebaseapp.com",
  projectId: "edcfin-1bb5e",
  storageBucket: "edcfin-1bb5e.appspot.com",
  messagingSenderId: "137440376375",
  appId: "1:137440376375:web:8b5582c6c8ccae408f71b2",
  measurementId: "G-X44TXLKTRY"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db= getFirestore(app);
export {db};