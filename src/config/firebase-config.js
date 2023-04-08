import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA74ba8z5qOxM4tr1RnLqJYlFFuJ6AShZw",
  authDomain: "netflix-176a8.firebaseapp.com",
  projectId: "netflix-176a8",
  storageBucket: "netflix-176a8.appspot.com",
  messagingSenderId: "859763453470",
  appId: "1:859763453470:web:a4688783a0118cac2cc80f",
  measurementId: "G-M0C4E3DQJK"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);