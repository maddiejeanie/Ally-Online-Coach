import {React, useState} from "react";
import { Link } from "react-router-dom";


const FitHome = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const CategoryButton = ({ categoryName }) => (
    <Link to={`/fitfolio/category/${categoryName.toLowerCase()}`}>
    <button className="w-full h-20 px-4 py-2 bg-rose-500 text-white rounded-md hover:bg-rose-600 transition duration-300">
        {categoryName.toLowerCase()}
      </button>
    </Link>
  );

  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-2xl w-full text-s flex flex-col items-center justify-center my-4 mx-auto sm:w-1/2">
      <div className="h1 flex items-center justify-center w-10 h-10 p-2 border-0 rounded-full bg-rose-500 text-white text-xl">
        <i className="fa-solid fa-dumbbell"></i>
      </div>
      <h2 className="m-8 h2 text-3xl uppercase text-shadow flex justify-center text-rose-500">FitFolio</h2>
  
<p>Welcome to FitFolio – your ultimate fitness companion! 🏋️‍♂️ Explore diverse workouts categorized by body part, equipment, target muscles, or search by name. Enjoy a user-friendly interface for a seamless fitness experience. Stay fit anytime, anywhere. Let's make every workout count! 💪</p>     


<div className="my-4">
  <label className="block text-rose-700 text-sm font-bold mb-2" aria-label="Search by Name" htmlFor="searchByName">
    Search by Name
  </label>
 


<p className="block text-rose-700 text-sm font-bold mt-4">Search by Category</p>
<ul className="flex gap-4 py-4">
    <CategoryButton categoryName="target" />
    <CategoryButton categoryName="bodyPart" />
    <CategoryButton categoryName="equipment" />
  </ul>
        </div>
    </div>
  );
};

export default FitHome;
