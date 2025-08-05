// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlUZq6V0tKIcl2z4cLbE8iX0MMPFwQzpQ",
  authDomain: "civil-website-7dc1a.firebaseapp.com",
  projectId: "civil-website-7dc1a",
  storageBucket: "civil-website-7dc1a.firebasestorage.app",
  messagingSenderId: "390442247798",
  appId: "1:390442247798:web:566c44eb4859164403a157",
  measurementId: "G-2BJRLVWEWB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, analytics, db, auth, storage };
