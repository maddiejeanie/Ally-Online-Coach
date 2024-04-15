import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PreviewCard from "./PreviewCard";
import LoadingSpinner from "./LoadingSpinner";
import { fetchData, options } from './fetchData';
import Breadcrumbs from "./Breadcrumbs";

const SearchResults = () => {
  const { categoryName, subcategory } = useParams();
  const [exercises, setExercises] = useState([]);
  const [exercisesCache, setExercisesCache] = useState({});
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
    }

    const fetchDataAndSetExercises = async () => {
      try {
        const cacheKey = `${endpoint}-${offset}`;
        if (exercisesCache[cacheKey]) {
          setExercises((prevExercises) =>
            offset === 0 ? exercisesCache[cacheKey] : [...prevExercises, ...exercisesCache[cacheKey]]
          );
          setLoading(false);
          setShowLoadMore(exercisesCache[cacheKey].length >= lengthWanted);
        } else {
          const data = await fetchData(endpoint, options);
          setExercisesCache((prevCache) => ({
            ...prevCache,
            [cacheKey]: data,
          }));
          setExercises((prevExercises) =>
            offset === 0 ? data : [...prevExercises, ...data]
          );
          setLoading(false);
          setShowLoadMore(data.length >= lengthWanted);
        }
      } catch (error) {
        console.error('Error fetching exercises:', error);
      }
    };

    fetchDataAndSetExercises();
  }, [lengthWanted, offset, subcategory, categoryName, exercisesCache]);

  function handleLoadMore() {
    setLoading(true);
    setOffset(prevOffset => prevOffset + lengthWanted);
  }

  return (
    <div className="bg-gradient-to-r from-rose-500 to-rose-700 p-4 rounded-lg shadow-2xl w-full text-s text-white flex flex-col justify-center my-4 mx-auto sm:w-3/4 lg:w-1/2">
      <div className="text-s flex flex-col items-center justify-center mx-auto">
        <div className="h1 flex items-center justify-center w-10 h-10 p-2 border-0 rounded-full bg-rose-800 text-white text-xl">
          <i className="fa-solid fa-dumbbell"></i>
        </div>
        <h2 className="mt-8 h2 text-3xl uppercase text-shadow flex justify-end text-rose-100">Fitfolio</h2>
      </div>
      {loading && <LoadingSpinner />}
      {exercises && (
        <>
          <h2 className="m-4 h2 text-2xl uppercase text-shadow flex justify-center text-rose-100 tracking-wide">
            {subcategory && subcategory.replace("-", " ")} Exercises
          </h2>
          <Breadcrumbs />
          <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 items-stretch">
            {exercises.map((exercise, index) => (
              <Link key={index} to={`/fitfolio/exercise/${exercise.id}`} className="flex flex-col h-full">
                <PreviewCard key={exercise.id} exercise={exercise} className="flex-grow" />
              </Link>
            ))}
          </section>
          <p className="my-4 text-m text-shadow flex justify-center text-white">
            Showing 1 - {exercises.length}
          </p>
          {showLoadMore && (
            <button
              className="w-1/2 px-4 py-2 bg-rose-700 text-white rounded-md block mx-auto hover:bg-rose-600 transition duration-300"
              onClick={handleLoadMore}
            >
              Load More
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default SearchResults;