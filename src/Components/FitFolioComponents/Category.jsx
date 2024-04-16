import React, { useState, useEffect } from "react";
import { fetchData, options } from "./fetchData";
import { useParams, Link } from "react-router-dom";
import SubSiteHeader from "../WebsiteComponents/SubSiteHeader";

// ErrorMessage component
const ErrorMessage = ({ error }) => {
  return <div className="text-red-500 my-4">{error}</div>;
};

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { categoryName } = useParams();

  useEffect(() => {
    const fetchDataAndSetCategories = async () => {
      setLoading(true);
      try {
        let adjustedCategoryName =
          categoryName === "bodypart" ? "bodyPart" : categoryName;
        let endpoint = `/${adjustedCategoryName}List`;

        const data = await fetchData(endpoint, options);

        setCategories(data);
        setLoading(false);
        setError(""); // Reset error if data is successfully fetched
      } catch (error) {
        setLoading(false);
        if (error.message.includes("429")) {
          setError("Too many requests to the API. Please try again later.");
        } else {
          setError(`Error fetching categories: ${error.message}`);
        }
        console.error("Error fetching categories:", error);
      }
    };

    fetchDataAndSetCategories();
  }, []); // Only run effect when categoryName changes

  return (
    <div className="bg-gradient-to-r from-rose-500 to-rose-700 p-8 shadow-2xl w-full text-s text-white flex flex-col items-center justify-center sm:my-4 sm:rounded-lg mx-auto sm:w-3/4 lg:w-1/2">
      <SubSiteHeader name={location.pathname} />
      {loading ? (
        <div className="text-white">Loading...</div>
      ) : (
        <div>
          {error && <ErrorMessage error={error} />}
          <h3 className="m-8 h3 text-xl uppercase text-shadow flex justify-center text-white">
            Select Exercises by {categoryName}
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-stretch">
            {categories.length > 0 ? (
              categories.map((subcategory, index) => (
                <li key={index} className="relative">
                  <Link
                    to={`/fitfolio/category/${categoryName.toLowerCase()}/${subcategory
                      .toLowerCase()
                      .replace(/ /g, "-")}`}
                  >
                    <div className=" bg-white rounded-md overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col h-full">
                      <div className="h-32 bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center">
                        {
                          <i
                            className={`text-5xl fa-solid fa-${
                              categoryName === "target"
                                ? "bullseye"
                                : categoryName === "equipment"
                                ? "bicycle"
                                : "person-running"
                            } text-orange-200`}
                          ></i>
                        }
                      </div>
                      <div className="p-4 text-center">
                        <h4 className="text-lg font-semibold text-rose-500">
                          {subcategory}
                        </h4>
                      </div>
                    </div>
                  </Link>
                </li>
              ))
            ) : (
              <div>No categories found</div>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Category;
