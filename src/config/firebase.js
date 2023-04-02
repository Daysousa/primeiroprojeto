
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyCKN26225VoC2eciAlInyle-hjxyY63OXc",
  authDomain: "tik-tok---ebac-jornada.firebaseapp.com",
  projectId: "tik-tok---ebac-jornada",
  storageBucket: "tik-tok---ebac-jornada.appspot.com",
  messagingSenderId: "497948096436",
  appId: "1:497948096436:web:7efc6a8229db9cc06fe4e1"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;