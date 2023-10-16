import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBBOUT9H1yJ9kxm3vUAakwNf8BxLa2gwTE",
  authDomain: "bizontek-a9099.firebaseapp.com",
  databaseURL:
    "https://bizontek-a9099-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "bizontek-a9099",
  storageBucket: "bizontek-a9099.appspot.com",
  messagingSenderId: "603745249905",
  appId: "1:603745249905:web:7af4380e64df33c04149d0",
};

// Initialize Firebase
export const initializeFirebase = () => initializeApp(firebaseConfig);
