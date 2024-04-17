import React from "react";
import { useAuth } from "./AuthContext.jsx";
import { useNavigate, Link } from "react-router-dom";
import SubSiteHeader from "../WebsiteComponents/SubSiteHeader.jsx";

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate("/clientcheckin");
  };

  return (
<div className="bg-gradient-to-r from-sky-500 to-sky-700 p-8 shadow-2xl w-full text-s text-white flex flex-col flex-1 items-center justify-center sm:my-4 sm:rounded-lg mx-auto sm:w-3/4 lg:w-1/2">
    <SubSiteHeader name={location.pathname}/>
      
  
        <Link
          to="/clientcheckin/posts"
          className="w-1/2 my-2 text-center px-4 py-2 rounded-lg bg-sky-100 text-sky-700 transition-colors duration-300 hover:bg-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-400"

          >
          View Check-ins
        </Link>
  
        <Link
          to="/clientcheckin/posts/new"
          className="w-1/2 text-center px-4 py-2 my-4 border border-sky-500 text-sky-700 bg-sky-100 rounded-lg shadow-lg hover:bg-sky-200 focus:outline-none focus:bg-sky-200"
          >
          Create Check-in
        </Link>
  
  
      <p className="my-8">All done, <Link className="text-blue-200 underline" to="#" onClick={handleSignOut}>log me out</Link></p>
    </div>
  );
  
  
};

export default Dashboard;
