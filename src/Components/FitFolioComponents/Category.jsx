import React, { useState, useEffect } from "react";
import axios from 'axios';

import SearchResults from "./SearchResults";
const Category = () => {
  const [category, setCategories] = useState([
    "assisted",
    "band",
    "barbell",
    "body weight",
    "bosu ball",
    "cable",
    "dumbbell",
    "elliptical machine",
    "ez barbell",
    "hammer",
    "kettlebell",
    "leverage machine",
    "medicine ball",
    "olympic barbell",
    "resistance band",
    "roller",
    "rope",
    "skierg machine",
    "sled machine",
    "smith machine",
    "stability ball",
    "stationary bike",
    "stepmill machine",
    "tire",
    "trap bar",
    "upper body ergometer",
    "weighted",
    "wheel roller"
  ]);

 

  return (
<div className="bg-gray-100 p-8 rounded-lg shadow-2xl w-full text-s flex flex-col items-center justify-center my-4 mx-auto sm:w-1/2">
  <div className="h1 flex items-center justify-center w-10 h-10 p-2 border-0 rounded-full bg-rose-500 text-white text-xl">
    <i className="fa-solid fa-dumbbell"></i>
  </div>
  <h2 className="m-8 h2 text-3xl uppercase text-shadow flex justify-center text-rose-400">FitFolio</h2>
  <h3 className="m-8 h3 text-xl uppercase text-shadow flex justify-center text-rose-500">Search by [categoryType]</h3>

  <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {category.map((subcategory, index) => (
      <li key={index}>
        <button className="w-full h-20 px-4 py-2 bg-rose-500 text-white rounded-md hover:bg-rose-600 transition duration-300">
          {subcategory}
        </button>
      </li>
    ))}
  </ul>

  <SearchResults />

  
</div>

  );
  
};

export default Category;
