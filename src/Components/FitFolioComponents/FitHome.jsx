import React from "react";
import { Link } from "react-router-dom";
import Listing from "./Listing";

const FitHome = () => {
  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-2xl w-full text-s flex flex-col items-center justify-center my-4 mx-auto sm:w-1/2">
      <div className="h1 flex items-center justify-center w-10 h-10 p-2 border-0 rounded-full bg-rose-500 text-white text-xl">
        <i className="fa-solid fa-dumbbell"></i>
      </div>
      <h2 className="m-8 h2 text-3xl uppercase text-shadow flex justify-center text-rose-500">FitFolio</h2>
  
      <p>welcome to fitfolio</p>
      <p>Category: Body Part</p>
      <p>Category: Equiptment</p>
      <p>Category: Target</p>
      <p>search by name</p>
    <Listing />
    </div>
  );
};

export default FitHome;
