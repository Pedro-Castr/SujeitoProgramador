import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDS0EsIJi289fVypmhJRbSQISld7WK2jJU",
  authDomain: "curso-7206c.firebaseapp.com",
  projectId: "curso-7206c",
  storageBucket: "curso-7206c.firebasestorage.app",
  messagingSenderId: "162274792083",
  appId: "1:162274792083:web:60f46e1f1bb743e6c77366",
  measurementId: "G-NVHZTWQWTL",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db };
