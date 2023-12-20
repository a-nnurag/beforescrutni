// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVaZsJQ--xpKDSfngKc7BFcRP5ovC3oBA",
  authDomain: "edcprod-efcb9.firebaseapp.com",
  projectId: "edcprod-efcb9",
  storageBucket: "edcprod-efcb9.appspot.com",
  messagingSenderId: "664219150341",
  appId: "1:664219150341:web:1fa879b21b3e62980c146c",
  measurementId: "G-YY0MT3RWJB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db= getFirestore(app);
export {db};