import { initializeApp } from "firebase/app"



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAD7293mPnxKFAaxzw5SgbrZGUDwWQw3wU",
  authDomain: "pt-clients-checkin.firebaseapp.com",
  databaseURL: "https://pt-clients-checkin-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "pt-clients-checkin",
  storageBucket: "pt-clients-checkin.appspot.com",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
