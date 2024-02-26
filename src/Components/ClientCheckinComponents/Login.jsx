import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const auth = getAuth();
  const navigate = useNavigate()
  const provider = new GoogleAuthProvider();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
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
      navigate('/clients/dashboard');
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
      navigate('/clients/dashboard');
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
          <div className="bg-gray-100 p-8 rounded-lg shadow-2xl w-full text-s flex flex-col items-center justify-center my-4 mx-auto sm:w-3/4 md:w-1/2">

      <div className="text-s flex flex-col items-center justify-center my-4 mx-auto ">
        <div className="h1 flex items-center justify-center w-10 h-10 p-2 border-0 rounded-full bg-sky-500 text-white text-xl">
          <i className="fa-solid fa-dumbbell"></i>
        </div>
        <h2 className="mt-8 h2 text-3xl uppercase text-shadow flex justify-end text-sky-500">Client Checkin</h2>
        <p className="my-4 w-2/3 text-justify">
Introducing "Client Check-in" – your ultimate solution for hassle-free check-ins! 
Say goodbye to trying to remember what information you need to share, or having your trainer remind you it's time to checkin!
 With <strong>Firestore's authentication</strong> and <strong>real-time database</strong>, effortlessly log your check-ins and track your fitness journey with your trainer. 
 Embrace convenience and log your Client Check-in today!</p>
      </div>
      <form
      onSubmit={handleLogin}
      className="w-2/3"
    >
      <h3 className="h3 text-3xl uppercase text-shadow flex justify-start text-sky-500">Login</h3>


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
          className="block w-full  px-4 py-2 border border-white rounded-lg bg-sky-200 text-sky-700 focus:outline-none focus:bg-sky-100"
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
          className="block w-full px-4 py-2 border border-white rounded-lg bg-sky-200 text-sky-700 focus:outline-none focus:bg-sky-100"
          required
        />
      </div>

      <button
        type="submit"
        className="my-2 w-full px-4 py-2 border border-white text-white bg-sky-500 rounded-lg shadow-lg hover:bg-sky-400 focus:outline-none focus:bg-sky-400"
      >
        Login
      </button>

      <button
        type="button"
        onClick={handleCreate}
        className="my-2 w-full px-4 py-2 border border-sky-500 text-sky-700 bg-sky-100 rounded-lg shadow-lg hover:bg-sky-200 focus:outline-none focus:bg-sky-200"
      >
        Create Account
      </button>

      <button
        type="button"
        onClick={handleGoogleSignin}
        className="my-2 w-full px-4 py-2 border border-sky-500 text-sky-700 bg-sky-100 rounded-lg shadow-lg hover:bg-sky-200 focus:outline-none focus:bg-sky-200"
      >
        Create/Sign in via Google <i className="px-1 fa-brands fa-google"></i>
      </button>

      {error && <p className="text-red-500">{error}</p>}
    </form>
    </div>
  );
};

export default LoginForm
