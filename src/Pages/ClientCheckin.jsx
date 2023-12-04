import { useState } from "react";

import Form from "../Components/ClientCheckinComponents/Form";
import Login from "../Components/ClientCheckinComponents/Login";
import LoggedInView from "../Components/ClientCheckinComponents/LoggedInView";



const ClientCheckin = () => {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <>
      <div className="text-s flex flex-col items-center justify-center my-4 mx-auto sm:w-1/2">
        <div className="bg-gradient-to-r from-indigo-400 via-purple-500 to-blue-300 bg-clip-text pb-4">
          <h1 className="p-4 h1 text-6xl uppercase text-shadow flex justify-end text-transparent">
            Client Check-In
          </h1>
        </div>
        <Login/>
        {loggedIn ? <LoggedInView/>: null}
        <Form/>
        </div>
       
        </>
  );
};

export default ClientCheckin;
