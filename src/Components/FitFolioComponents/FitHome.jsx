import React, { useState } from "react";
import { Link } from "react-router-dom";
import SubSiteHeader from "../WebsiteComponents/SubSiteHeader";

const FitHome = () => {
  const [searchTerm, setSearchTerm] = useState("");

  

  const CategoryButton = ({ categoryName, icon }) => (
    <Link
      to={`/fitfolio/category/${categoryName.toLowerCase()}`}
      className="w-full"
      icon={icon}
    >
      <div className="flex flex-col bg-white rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 text-rose-600">
        <div className="h-32 bg-gradient-to-r from-orange-400 to-red-600 flex items-center justify-center">
          <i className={`text-5xl fa-solid fa-${icon} text-orange-200`}></i>
        </div>
        <div className="p-4 text-center">
          <h4 className="text-lg font-bold uppercase tracking-wide">
            {categoryName.toLowerCase()}
          </h4>
        </div>
      </div>
    </Link>
  );
  
  return (
    <div className="bg-gradient-to-r from-rose-500 to-rose-700 p-8 shadow-2xl w-full text-s text-white flex flex-col flex-1 items-center justify-center sm:my-4 sm:rounded-lg mx-auto sm:w-3/4 lg:w-1/2">
    <SubSiteHeader name={location.pathname}/>

        <p className="my-8 md:text-lg  text-justify leading-relaxed">
          Welcome to FitFolio – your ultimate fitness companion! 🏋️‍♂️ Explore
          diverse workouts categorized by body part, equipment, and target
          muscles, using <strong>FitnessAPI</strong>. Enjoy a user-friendly
          interface for a seamless fitness experience. Stay fit anytime, anywhere.
          Let's make every workout count! 💪
        </p>
        <div className="my-8 w-full">
          <h2 className="h2 text-3xl uppercase text-shadow flex justify-center text-rose-100 font-bold tracking-wide">
            Search by Category
          </h2>
          <div className="flex flex-col w-full gap-6 py-8 items-center justify-center md:flex-row">
            <CategoryButton categoryName="Target" icon="bullseye" />
            <CategoryButton categoryName="BodyPart" icon="person-running" />
            <CategoryButton categoryName="Equipment" icon="bicycle" />
          </div>
        </div>
      </div>

  );
};

export default FitHome;
