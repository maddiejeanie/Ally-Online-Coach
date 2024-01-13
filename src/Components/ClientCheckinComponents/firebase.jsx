import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAD7293mPnxKFAaxzw5SgbrZGUDwWQw3wU",
  authDomain: "pt-clients-checkin.firebaseapp.com",
  databaseURL: "https://pt-clients-checkin-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "pt-clients-checkin",
  storageBucket: "pt-clients-checkin.appspot.com",
  messagingSenderId: "284874971153",
  appId: "1:284874971153:web:f0476dfaf4b6cd4d79f9b0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
