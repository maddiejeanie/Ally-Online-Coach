import React, { useState } from "react";
import { Link } from "react-router-dom";

const FitHome = () => {
  const [searchTerm, setSearchTerm] = useState("");

  

  const CategoryButton = ({ categoryName, icon }) => (
    <Link to={`/fitfolio/category/${categoryName.toLowerCase()}`} className="w-full">
      
      <div className="flex flex-col bg-white rounded-md overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 text-rose-500">
            <div className="h-32 bg-gray-200 flex items-center justify-center">
            <i className={`text-3xl fa-solid fa-${icon} mr-2`}></i>
            </div>
            <div className="p-4 text-center">
              <h4 className="text-lg font-semibold">        {categoryName.toLowerCase()}</h4>
            </div>
          </div>


    </Link>
  );

  return (
<div className="bg-gradient-to-r from-rose-500 to-rose-700 p-8 rounded-lg shadow-2xl w-full text-s text-white flex flex-col items-center justify-center my-4 mx-auto sm:w-3/4 lg:w-1/2">
  <div className="text-s flex flex-col items-center justify-center mx-auto">
    <div className="h1 flex items-center justify-center w-10 h-10 border-0 rounded-full bg-rose-800 text-white text-xl">
      <i className="fa-solid fa-dumbbell"></i>
    </div>
    <h2 className="mt-8 h2 text-3xl uppercase text-shadow flex justify-end text-rose-100">Fitfolio</h2>



        <p className="my-4 md:w-2/3 text-justify">
          Welcome to FitFolio – your ultimate fitness companion! 🏋️‍♂️ Explore diverse workouts categorized by body part, equipment, target muscles, using <strong>FitnessAPI</strong>. Enjoy a user-friendly interface for a seamless fitness experience. Stay fit anytime, anywhere. Let's make every workout count! 💪
        </p>
        <div className="my-4 w-2/3">
        <h2 className="h2 text-xl uppercase text-shadow flex justify-center text-rose-100">Search by Category</h2>

          <div className="flex flex-col flex-grow gap-4 py-4 items-center justify-center md:flex-row">
            <CategoryButton categoryName="target" icon="bullseye" />
            <CategoryButton categoryName="bodyPart" icon="person-running" />
            <CategoryButton categoryName="equipment" icon="bicycle" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FitHome;
