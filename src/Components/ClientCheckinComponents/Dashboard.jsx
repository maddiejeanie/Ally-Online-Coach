import React from "react";
import { useAuth } from "./AuthContext.jsx";
import { useNavigate, Link } from "react-router-dom";

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate("/clients");
  };

  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-2xl w-full text-s flex flex-col items-center justify-center my-4 mx-auto sm:w-1/2">
      <div className="h1 flex items-center justify-center w-10 h-10 p-2 border-0 rounded-full bg-indigo-500 text-white text-xl">
        <i className="fa-solid fa-dumbbell"></i>
      </div>
      <h2 className="m-8 h2 text-3xl uppercase text-shadow flex justify-center text-indigo-500">Dashboard</h2>
  
        <Link
          to="/clients/posts"
          className="w-1/2 text-center px-4 py-2 my-4 border border-indigo-500 text-indigo-700 bg-indigo-100 rounded-lg shadow-lg hover:bg-indigo-200 focus:outline-none focus:bg-indigo-200"
          >
          View Check-ins
        </Link>
  
        <Link
          to="/clients/posts/new"
          className="w-1/2 text-center px-4 py-2 my-4 border border-indigo-500 text-indigo-700 bg-indigo-100 rounded-lg shadow-lg hover:bg-indigo-200 focus:outline-none focus:bg-indigo-200"
          >
          Create Check-in
        </Link>
  
  
      <p className="my-8">All done, <Link className="text-indigo-500 underline" to="#" onClick={handleSignOut}>log me out</Link></p>
    </div>
  );
  
  
};

export default Dashboard;
