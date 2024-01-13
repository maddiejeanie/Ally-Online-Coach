import React from "react"
import { useAuth } from "./AuthContext.jsx"
import { useNavigate, Link } from "react-router-dom";

const Dashboard = () => {
    const { user, signOut } = useAuth();
    const navigate = useNavigate();
  
    const handleSignOut = async () => {
   
          await signOut();
          navigate('/clients');
        } 

    const handleCreateCheckin = () => {
        navigate('/clients/posts/new')
    }
    
    return (
        <div className="text-s flex flex-col items-center justify-center my-4 mx-auto sm:w-1/2">
       <div className="bg-gray-100 p-8 rounded-lg shadow-2xl w-2/3"
        >
          <div className="text-s flex flex-col items-center justify-center my-4 mx-auto sm:w-1/2">
            <div className="h1 flex items-center justify-center w-10 h-10 p-2 border-0 rounded-full bg-indigo-500 text-white text-xl">
              <i className="fa-solid fa-dumbbell"></i>
            </div>
            <h2 className="mt-8 h2 text-3xl uppercase text-shadow flex justify-end text-indigo-500">Dashboard</h2>
          </div>
    <p className="my-8">
        Hi there <span className="text-indigo-500 font-bold">{user.email}</span>!
        You currently have no check-ins.
        </p>
        <button
  type="button"
  onClick={handleCreateCheckin}
  className="w-full px-4 py-2 border border-indigo-500 text-indigo-700 bg-indigo-100 rounded-lg shadow-lg hover:bg-indigo-200 focus:outline-none focus:bg-indigo-200"
>
                Create Check-in
            </button>

            <p className="my-8">All done, <Link className="text-indigo-500 underline" to="#" onClick={handleSignOut}>log me out</Link></p>
        </div>
        </div>
        
    )
}

export default Dashboard