import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PreviewCard from "./PreviewCard";
import LoadingSpinner from "./LoadingSpinner";
import { fetchData, options } from './fetchData';
import Breadcrumbs from "./Breadcrumbs";

const SearchResults = () => {
  const { categoryName, subcategory, exerciseId } = useParams();
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showLoadMore, setShowLoadMore] = useState(false);
  const [lengthWanted, setLengthWanted] = useState(6);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let endpoint = '';

    if (subcategory) {
      let correctedCategoryName = categoryName;
      if (categoryName === "bodypart") {
        correctedCategoryName = "bodyPart";
      }
      endpoint = `/${correctedCategoryName}/${subcategory.replace("-", "%20")}?limit=${lengthWanted}&offset=${offset}`;
    } else if (exerciseId) {
      endpoint = `/exercise/${exerciseId}?limit=${lengthWanted}&offset=${offset}`;
    }

    const fetchDataAndSetExercises = async () => {
      try {
        const data = await fetchData(endpoint, options);
        setExercises(prevExercises => offset === 0 ? data : [...prevExercises, ...data]);
        setLoading(false);
        setShowLoadMore(data.length >= lengthWanted);
      } catch (error) {
        console.error('Error fetching exercises:', error);
      } 
    };

    fetchDataAndSetExercises();
  }, [lengthWanted, offset]);

  function handleLoadMore() {
    setLoading(true);
    setOffset(prevOffset => prevOffset + lengthWanted);
  }

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-2xl w-full text-s flex flex-col my-4 mx-auto sm:w-3/4 md:w-1/2">
     
      {loading && <LoadingSpinner />}
      {exercises && (
        <>
          <h3 className="m-4 h3 text-xl uppercase text-shadow flex justify-center text-rose-500">
            {subcategory ? subcategory.replace("-", " ") : 'Exercises'}
          </h3>

           <Breadcrumbs />
          <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 items-stretch">
            {exercises.map((exercise, index) => (
              <Link key={index} to={`/fitfolio/exercise/${exercise.id}`} className="flex flex-col h-full">
                <PreviewCard key={exercise.id} exercise={exercise} className="flex-grow"/>
              </Link>
            ))}
          </section>

          <p className="my-2 text-m text-shadow flex justify-center text-rose-900">
Showing 1 - {exercises.length}</p>
          {showLoadMore && (
            <button
            className="w-1/2 px-4 py-2 bg-rose-500 text-white rounded-md block mx-auto hover:bg-rose-600 transition duration-300"
            onClick={handleLoadMore}
            >
              Load More
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default SearchResults;
