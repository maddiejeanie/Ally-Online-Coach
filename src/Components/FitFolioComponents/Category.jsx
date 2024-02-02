import React, { useState, useEffect } from "react";
import { fetchData } from "./fetchData";
import { useParams } from "react-router-dom";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  let { categoryName } = useParams();

  categoryName === "bodypart" ? (categoryName = "bodyPart") : (categoryName = categoryName);
 
  const endpoint = `/${categoryName}List`;

  useEffect(() => {
    const fetchDataAndSetCategories = async () => {
      try {
        // Assuming fetchData takes a URL and options as parameters
        const data = await fetchData(endpoint);

        // Assuming data is an array of categories
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDataAndSetCategories();
  }, [categoryName]);
  
  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-2xl w-full text-s flex flex-col items-center justify-center my-4 mx-auto sm:w-1/2">
      <div className="h1 flex items-center justify-center w-10 h-10 p-2 border-0 rounded-full bg-rose-500 text-white text-xl">
        <i className="fa-solid fa-dumbbell"></i>
      </div>
      <h2 className="m-8 h2 text-3xl uppercase text-shadow flex justify-center text-rose-400">FitFolio</h2>
      <h3 className="m-8 h3 text-xl uppercase text-shadow flex justify-center text-rose-500">Search by {categoryName}</h3>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((subcategory, index) => (
          <li key={index}>
            <button className="w-full h-20 px-4 py-2 bg-rose-500 text-white rounded-md hover:bg-rose-600 transition duration-300">
              {subcategory}
            </button>
          </li>
        ))}
      </ul>
     </div>
  );
};

export default Category;
