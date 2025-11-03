import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  "projectId": "casey123",
  "appId": "1:606492569757:web:326e0a4da32e12782ce474",
  "storageBucket": "casey123.firebasestorage.app",
  "apiKey": "AIzaSyBe5EM1qNQtGBazoHN5ywx48plIA81yVcY",
  "authDomain": "casey123.firebaseapp.com",
  "messagingSenderId": "606492569757",
  "projectNumber": "606492569757",
  "version": "2"
  // Your Firebase configuration object goes here
}

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);