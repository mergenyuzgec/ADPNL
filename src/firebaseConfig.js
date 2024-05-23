import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBHXoc74gWa-7CmdyLzNU-4OG8SZ4Kbk1k",
    authDomain: "sosyal-surucu.firebaseapp.com",
    databaseURL: "https://sosyal-surucu-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "sosyal-surucu",
    storageBucket: "sosyal-surucu.appspot.com",
    messagingSenderId: "682266962440",
    appId: "1:682266962440:web:22c2e632fbd17557fd7fbd",
    measurementId: "G-135PGJNJ1H"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut };


