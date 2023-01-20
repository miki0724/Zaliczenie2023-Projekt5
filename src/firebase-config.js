import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1idxlSmW77PQTAb-V687g2pMrAoSC8QU",
  authDomain: "crud-8fd57.firebaseapp.com",
  projectId: "crud-8fd57",
  storageBucket: "crud-8fd57.appspot.com",
  messagingSenderId: "363446046810",
  appId: "1:363446046810:web:582acc7df34466961b4863",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
