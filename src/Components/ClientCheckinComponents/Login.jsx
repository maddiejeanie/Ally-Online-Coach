import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import SubSiteHeader from "../WebsiteComponents/SubSiteHeader";

const LoginForm = () => {
  const auth = getAuth();
  const navigate = useNavigate()
  const provider = new GoogleAuthProvider();

  const [loginData, setLoginData] = useState({
    email: "checkin@test.com",
    password: "test123",
  });

  const handleInputChange = (e) => {
    setError(null);
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, loginData.email, loginData.password);
      const user = userCredential.user;
      // setUser(user); // If you need user state
      navigate('/clientcheckin/dashboard');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, loginData.email, loginData.password);
      const user = userCredential.user;
      // setUser(user); // If you need user state
      navigate('/clientcheckin/dashboard');
    } catch (error) {
      setError(error.message);
    }
  }
    
    function handleGoogleSignin() {
  signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;

  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(error.message)
    const credential = GoogleAuthProvider.credentialFromError(error);
  });
    }
    

  function resetForm() {
    setLoginData({
      email: "",
      password: "",
    });
  }

  return (
<div className="bg-gradient-to-r from-sky-500 to-sky-700 p-8 shadow-2xl w-full text-s text-white flex flex-col flex-1 items-center justify-center sm:my-4 sm:rounded-lg sm-items-center mx-auto sm:w-3/4 lg:w-1/2 ">
    <SubSiteHeader name={location.pathname}/>


      <p className="my-4 w-full text-justify text-white">
        Introducing "Client Check-in" – your ultimate solution for hassle-free check-ins! 
        Say goodbye to trying to remember what information you need to share, or having your trainer remind you it's time to checkin!
        With <strong>Firestore's authentication</strong> and <strong>real-time database</strong>, effortlessly log your check-ins and track your fitness journey with your trainer. 
        Embrace convenience and log your Client Check-in today!
      </p>
  

    <form onSubmit={handleLogin} className="sm:w-2/3 w-full">
    <h2 className="h2 text-3xl uppercase text-shadow flex justify-center text-teal-100 font-bold tracking-wide my-4 ">
        Login</h2>

        <div className="mb-2">
        <label htmlFor="email" className="sr-only">
      Email:
    </label>
    <input
      type="email"
      id="email"
      name="email"
      value={loginData.email}
      onChange={handleInputChange}
      placeholder="Email"
      className="block w-full px-4 py-2 rounded-lg bg-white text-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-400"
      required
    />
  </div>
  <div className="mb-2">
    <label htmlFor="password" className="sr-only">
      Password:
    </label>
    <input
      type="password"
      id="password"
      name="password"
      value={loginData.password}
      onChange={handleInputChange}
      placeholder="Password"
      className="block w-full px-4 py-2 rounded-lg bg-white text-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-400"
      required
    />
  </div>
  <div className="flex gap-4">
  <button
    type="submit"
    className="my-2 w-full px-4 py-2 rounded-lg bg-sky-100 text-sky-700 transition-colors duration-300 hover:bg-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-400"
  >
    Login
  </button>
  
  <button
    type="button"
    onClick={handleCreate}
    className="my-2 w-full px-4 py-2 rounded-lg bg-sky-100 text-sky-700  transition-colors duration-300 hover:bg-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-400"
  >
    Create Account
  </button>
  </div>
  <button
    type="button"
    onClick={handleGoogleSignin}
    className="my-2 w-full px-4 py-2 rounded-lg bg-sky-100 text-sky-700 transition-colors duration-300 hover:bg-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-400"
  >
    Sign in via Google <i className="px-1 fa-brands fa-google"></i>
  </button>
  
  {error && <p className="text-white bg-red-500 p-2">Error: {error}</p>}
    </form>
  </div>
  );
};

export default LoginForm
