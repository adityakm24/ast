import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, push, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCeqtOP2bTUyqjk8SYWgbvAMLFRdluZ-kg",
  authDomain: "ats-shopping-d95f3.firebaseapp.com",
  databaseURL: "https://ats-shopping-d95f3-default-rtdb.firebaseio.com",
  projectId: "ats-shopping-d95f3",
  storageBucket: "ats-shopping-d95f3.appspot.com",
  messagingSenderId: "39387348979",
  appId: "1:39387348979:web:b67c79cee5dfb9023e9c86",
  measurementId: "G-Y9QBVS11RY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
