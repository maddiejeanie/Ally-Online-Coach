import { useState } from "react";

import Form from "../Components/ClientCheckinComponents/Form";
import Login from "../Components/ClientCheckinComponents/Login";
import LoggedInView from "../Components/ClientCheckinComponents/LoggedInView";


import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAD7293mPnxKFAaxzw5SgbrZGUDwWQw3wU",
  authDomain: "pt-clients-checkin.firebaseapp.com",
  databaseURL: "https://pt-clients-checkin-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "pt-clients-checkin",
  storageBucket: "pt-clients-checkin.appspot.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);



const ClientCheckin = () => {

  return (
    <>
      <div className="text-s flex flex-col items-center justify-center my-4 mx-auto sm:w-1/2">
        <div className="bg-gradient-to-r from-indigo-400 via-purple-500 to-blue-300 bg-clip-text pb-4">
          <h1 className="p-4 h1 text-6xl uppercase text-shadow flex justify-end text-transparent">
            Client Check-In
          </h1>
        </div>
        <Login />
        {/* {loggedIn ? <LoggedInView/>: null}
        <Form/> */}
        </div>
       
        </>
  );
};

export default ClientCheckin;
