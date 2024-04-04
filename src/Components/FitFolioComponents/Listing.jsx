import { useEffect, useState } from 'react';

import { useParams, Link } from 'react-router-dom';
import { fetchData, options } from './fetchData';
import LoadingSpinner from './LoadingSpinner';
import Related from './Related';
const Listing = () => {
  let { exerciseId } = useParams();


  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const endpoint = `/exercise/${exerciseId}`;
  const urlbasis = `/fitfolio/category`

  useEffect(() => {
    const fetchDataAndSetExercise = async () => {
      try {
        const fetchedData = await fetchData(endpoint, options);
        setData(fetchedData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching exercise data:', error);
      }
    };

    fetchDataAndSetExercise();
  }, [exerciseId]); 

  return (
    <div className="bg-gradient-to-r from-rose-500 to-rose-700 p-8 rounded-lg shadow-2xl w-full text-s text-white my-4 mx-auto sm:w-3/4 lg:w-1/2">
    <div className="text-s flex flex-col items-center justify-center mx-auto">
        <div className="h1 flex items-center justify-center w-10 h-10 p-2 border-0 rounded-full bg-rose-800 text-white text-xl">
          <i className="fa-solid fa-dumbbell"></i>
        </div>
        <h2 className="mt-8 h2 text-3xl uppercase text-shadow flex justify-end text-rose-100">Fitfolio</h2>
        </div>
        {loading && <LoadingSpinner />}
      {!loading && (
        <>
         <button
            className="m-2 px-4 py-2 bg-rose-700 text-lg font-semibold text-white rounded-md  hover:bg-rose-600 transition duration-300 tracking-wide">
              <Link  to="/fitfolio">HOME</Link></button> 

              <section className="flex flex-col-reverse items-center sm:flex-row  bg-rose-50 rounded-lg shadow-lg">
  <div className="sm:w-2/3 md:w-1/2 bg-gradient-to-r from-orange-500 to-red-500 rounded-b-lg sm:rounded-br-none  self-stretch relative">
    <img
      className="sm:rounded-tl-lg shadow-lg w-full h-auto"
      src={data.gifUrl}
      alt={data.name}
    />
    <div className="px-2 py-4 leading-loose wrap">
      The {data.name} exercises the{" "}
      <Link
        to={`${urlbasis}/bodypart/${encodeURIComponent(
          data.bodyPart.replace(/ /g, "-")
        )}`}
        className="whitespace-nowrap uppercase bg-rose-700 text-white m-1 px-2 py-1 rounded-lg text-sm text-center my-2 hover:bg-rose-600 transition duration-300"
      >
        {data.bodyPart}
      </Link>
      using{" "}
      <Link
        to={`${urlbasis}/equipment/${encodeURIComponent(
          data.equipment.replace(/ /g, "-")
        )}`}
        className=" whitespace-nowrap uppercase bg-rose-700 text-white m-1 px-2 py-1 rounded-lg text-sm text-center my-2 hover:bg-rose-600 transition duration-300"
      >
        {data.equipment}
      </Link>
      , targeting your{" "}
      <Link
        to={`${urlbasis}/target/${encodeURIComponent(
          data.target.replace(/ /g, "-")
        )}`}
        className="whitespace-nowrap uppercase bg-rose-700 text-white m-1 px-2 py-1 rounded-lg text-sm text-center my-2 hover:bg-rose-600 transition duration-300"
      >
        {data.target}
      </Link>
      and the{" "}
      {data.secondaryMuscles && data.secondaryMuscles.length > 0 ? (
        <>
          {data.secondaryMuscles.slice(0, -1).map((muscle, index) => (
            <span key={index}>
              <Link
                to={`${urlbasis}/target/${encodeURIComponent(
                  muscle.replace(/ /g, "-")
                )}`}
                className=" whitespace-nowrap uppercase bg-rose-700 text-white m-1 px-2 py-1 rounded-lg text-sm text-center my-2 hover:bg-rose-600 transition duration-300"
              >
                {muscle}
              </Link>
              {index < data.secondaryMuscles.length - 2 && ", "}
            </span>
          ))}
          {" "}
          and{" "}
          <Link
            to={`${urlbasis}/target/${encodeURIComponent(
              data.secondaryMuscles[data.secondaryMuscles.length - 1].replace(
                / /g,
                "-"
              )
            )}`}
            className="whitespace-nowrap uppercase bg-rose-700 text-white m-1 px-2 py-1 rounded-lg text-sm text-center my-2 hover:bg-rose-600 transition duration-300"
          >
            {data.secondaryMuscles[data.secondaryMuscles.length - 1]}
          </Link>
        </>
      ) : (
        <span className="font-bold">None</span>
      )}
    </div>
  </div>
  <div className="p-4 text-sm mx-4 text-rose-700 flex flex-col sm:mt-0 sm:w-1/2 md:w-2/3">
    <div className="exercise-card">
    <div className="mb-4">

    <h1 className="text-4xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">
      How to: {data.name}
    </h1>
  </div>
</div>
<ol className="list-decimal list-inside py-4">
  {data.instructions.map((line, i) => (
    <li key={i} className="my-2">
      {line}
    </li>
  ))}
</ol>
    </div>

</section>
      <section>
      <h3 className="my-8 h3 text-xl uppercase text-shadow text-rose-100">
        Related {data.target} Exercises
        </h3>
        <Related lengthWanted={3} categoryName={"target"} subcategory={data.target} />
        <h3 className="my-8 h3 text-xl uppercase text-shadow text-rose-100">
        Related {data.bodyPart} Exercises
        </h3>
        <Related lengthWanted={3} categoryName={"bodypart"} subcategory={data.bodyPart}/>
        <h3 className="my-8 h3 text-xl uppercase text-shadow  text-rose-100">
        Related {data.equipment} Exercises
        </h3>
        <Related lengthWanted={3} categoryName={"equipment"} subcategory={data.equipment}/>
       
      </section>
      </>
      )}
    </div>
  );
};

export default Listing;
