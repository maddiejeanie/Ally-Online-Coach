import React from "react";
import { Link, useParams } from "react-router-dom";

const Breadcrumbs = () => {
  const { categoryName, subcategory } = useParams();

  return (
    <>
      <div className="flex justify-start my-2 text-m text-shadow gap-1 uppercase text-rose-900">
        <Link to="/fitfolio">Home</Link> >
        <Link to={`/fitfolio/category/${categoryName}`}>{categoryName}</Link> >
        {subcategory && (
          <Link to={`/category/${categoryName}/${subcategory}`}>{subcategory}</Link>
        )}
      </div>
    </>
  );
};

export default Breadcrumbs;
