// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCI1AeJ0jG7mY6B45kpf49gd11zoztD95I",
  authDomain: "twitter-38831.firebaseapp.com",
  projectId: "twitter-38831",
  storageBucket: "twitter-38831.appspot.com",
  messagingSenderId: "542551847449",
  appId: "1:542551847449:web:eed97673467da9c046f088",
  measurementId: "G-BWLGCVRF93"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);