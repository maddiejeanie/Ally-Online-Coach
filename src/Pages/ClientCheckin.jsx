import {React, useEffect} from 'react';
import Login from "../Components/ClientCheckinComponents/Login";
import Dashboard from "../Components/ClientCheckinComponents/Dashboard";
import { useAuth } from "../Components/ClientCheckinComponents/AuthContext.jsx"
import { useNavigate } from 'react-router-dom';

const ClientCheckin = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/clientcheckin/dashboard'); 
    }
  }, [user]);

  return (
    <>
      
        <Login/>
    
    </>
  );
};

export default ClientCheckin;
