import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PreviewCard from "./PreviewCard";
import LoadingSpinner from "./LoadingSpinner";
import { fetchData, options } from './fetchData';

const SearchResults = ({ lengthWanted, categoryName, subcategory }) => {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let correctedCategoryName = categoryName;
    if (categoryName === "bodypart") {
      correctedCategoryName = "bodyPart";
    }

    const endpoint = `/${correctedCategoryName}/${subcategory.replace("-", "%20")}?limit=${lengthWanted}`;

    const fetchDataAndSetExercises = async () => {
      try {
        const data = await fetchData(endpoint, options);
        setExercises(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching exercises:', error);
      } 
    };

    fetchDataAndSetExercises();
  }, [lengthWanted, categoryName, subcategory]);

  return (
    <div>
      {loading && <LoadingSpinner />}
      {exercises && (
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 items-stretch">
          {exercises.map((exercise, index) => (
            <Link key={index} to={`/fitfolio/exercise/${exercise.id}`} className="flex flex-col h-full">
              <PreviewCard key={exercise.id} exercise={exercise} className="flex-grow"/>
            </Link>
          ))}
        </section>
      )}
    </div>
  );
}

export default SearchResults;
