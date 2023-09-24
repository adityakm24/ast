import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCXSQCtu5r28_WzbBdKt_oYTeJ3YTn7Da8",
  authDomain: "ats-shopping-7b173.firebaseapp.com",
  databaseURL: "https://ats-shopping-7b173-default-rtdb.firebaseio.com",
  projectId: "ats-shopping-7b173",
  storageBucket: "ats-shopping-7b173.appspot.com",
  messagingSenderId: "405750494032",
  appId: "1:405750494032:web:e6dc7d1bef3e99c4f0f255",
  measurementId: "G-VGCHW8CBVH",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export const contactFormDB = ref(database, "contactForm");

export default app;
