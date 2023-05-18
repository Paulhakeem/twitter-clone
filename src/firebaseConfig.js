// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAEeHOvMkRCunQ0p2RvlULv3zYPX2R79Wk",
  authDomain: "twitter-clone-66672.firebaseapp.com",
  projectId: "twitter-clone-66672",
  storageBucket: "twitter-clone-66672.appspot.com",
  messagingSenderId: "71743513525",
  appId: "1:71743513525:web:f95c7c7b08f0d7d9a32ffc",
  measurementId: "G-3TFX8P1ZQ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);