import React, { useState } from "react";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log("Form submitted with:", formData);
  };

  return (
  

        
      <form
        className="bg-white p-8 rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
    <div className="text-s flex flex-col items-center justify-center my-4 mx-auto sm:w-1/2">
      <div className="h-14 w-14 border-0 rounded-full bg-indigo-500 text-white text-xl flex items-center justify-center">
            <i className="fa-solid fa-dumbbell"></i>
          </div>
          <h2 className="mt-8 h2 text-3xl uppercase text-shadow flex justify-end text-indigo-500">          Login
        </h2>
        </div>

       

        <div className="mb-2">
          <label htmlFor="email" className="sr-only">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="block w-full  px-4 py-2 border border-white rounded-lg bg-indigo-200 text-indigo-700 focus:outline-none focus:bg-indigo-100"
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
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Password"
            className="block w-full px-4 py-2 border border-white rounded-lg bg-indigo-200 text-indigo-700 focus:outline-none focus:bg-indigo-100"
            required
          />
        </div>

        <button
          type="submit"
          className="my-2 w-full px-4 py-2 border border-white text-white bg-indigo-500 rounded-lg shadow-lg hover:bg-indigo-400 focus:outline-none focus:bg-indigo-400"
        >
          Login
        </button>

        <button
          type="button"
          onSubmit={handleSubmit}
          className="w-full px-4 py-2 border border-indigo-500  text-indigo-700 bg-indigo-100 rounded-lg shadow-lg hover:bg-indigo-200 focus:outline-none focus:bg-indigo-200"
        >
          Create Account
        </button>
      </form>
    
  );
};

export default LoginForm;
