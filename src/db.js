// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqlqPjSv9ZeplxFvuuseuKskaR-1qlhdE",
  authDomain: "contactbook-ec7c5.firebaseapp.com",
  projectId: "contactbook-ec7c5",
  storageBucket: "contactbook-ec7c5.firebasestorage.app",
  messagingSenderId: "967334154743",
  appId: "1:967334154743:web:822886ed989a0e414e9ef2",
  measurementId: "G-X8RZSBLMW6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;