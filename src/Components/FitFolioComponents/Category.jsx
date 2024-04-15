import React, { useState, useEffect } from "react";
import { fetchData, options } from "./fetchData";
import { useParams, Link } from "react-router-dom";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [categoriesCache, setCategoriesCache] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [lengthWanted, setLengthWanted] = useState(6);
  const { categoryName } = useParams();

  useEffect(() => {
    const fetchDataAndSetCategories = async () => {
      try {
        let adjustedCategoryName =
          categoryName === "bodypart" ? "bodyPart" : categoryName;
        let endpoint = `/${adjustedCategoryName}List`;

        if (categoriesCache[adjustedCategoryName]) {
          setCategories(categoriesCache[adjustedCategoryName]);
          setLoading(false);
        } else {
          const data = await fetchData(endpoint, options);
          setCategoriesCache((prevCache) => ({
            ...prevCache,
            [adjustedCategoryName]: data,
          }));
          setCategories(data);
          setLoading(false);
        }
      } catch (error) {
        setError("Error fetching categories:", error);
        setLoading(false);
      }
    };

    fetchDataAndSetCategories();
  }, [categoryName, categoriesCache]);

  return (
    <div className="bg-gradient-to-r from-rose-500 to-rose-700 p-8 rounded-lg shadow-2xl w-full text-s text-white flex flex-col items-center justify-center my-4 mx-auto sm:w-3/4 lg:w-1/2">
      <div className="text-s flex flex-col items-center justify-center mx-auto">
        <div className="h1 flex items-center justify-center w-10 h-10 p-2 border-0 rounded-full bg-rose-800 text-white text-xl">
          <i className="fa-solid fa-dumbbell"></i>
        </div>
        <h2 className="mt-8 h2 text-3xl uppercase text-shadow flex justify-end text-rose-100">
          Fitfolio
        </h2>
        {error ? (
          <p>{error}</p>
        ) : (
          <div>
            <h3 className="m-8 h3 text-xl uppercase text-shadow flex justify-center text-white">
              Select Exercises by {categoryName}
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-stretch">
              {categories.map((subcategory, index) => (
                <li key={index} className="relative">
                  <Link
                    to={`/fitfolio/category/${categoryName.toLowerCase()}/${subcategory
                      .toLowerCase()
                      .replace(/ /g, "-")}`}
                  >
                    <div className=" bg-white rounded-md overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col h-full">
                      <div className="h-32 bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center">
                        {<i className={`text-5xl fa-solid fa-${categoryName === "target" ? "bullseye" : categoryName === "equipment" ? "bicycle" : "person-running"} text-orange-200`}></i>}
                      </div>
                      <div className="p-4 text-center">
                        <h4 className="text-lg font-semibold text-rose-500">
                          {subcategory}
                        </h4>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;