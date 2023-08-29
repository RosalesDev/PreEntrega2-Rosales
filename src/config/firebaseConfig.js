import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyAvX1RHhb7_tIFsmzXebr-yY8Wqc6dzAZI",
  authDomain: "pf-react-coderhouse.firebaseapp.com",
  projectId: "pf-react-coderhouse",
  storageBucket: "pf-react-coderhouse.appspot.com",
  messagingSenderId: "724426775826",
  appId: "1:724426775826:web:a4eb3fd3e40100353ce7cb"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);