import React from "react";
import { Link, useParams } from "react-router-dom";

const Breadcrumbs = () => {
  const { categoryName, subcategory } = useParams();

  return (
      <div className=" py-2 my-2 flex text-lg font-semibold flex-start gap-2 text-white rounded-md tracking-wide">
         <button
            className="px-4 py-2 bg-rose-700 text-white rounded-md block  hover:bg-rose-600 transition duration-300">
              <Link  to="/fitfolio">HOME</Link></button> 
              <button
            className="px-4 py-2 bg-rose-700 text-white rounded-md block  hover:bg-rose-600 transition duration-300">
              <Link  to={`/fitfolio/category/${categoryName}`}>{categoryName.toUpperCase()}</Link></button> 
        <p className="px-4 py-2">{subcategory && subcategory.toUpperCase()}</p>

      </div>

  );
};

export default Breadcrumbs;
