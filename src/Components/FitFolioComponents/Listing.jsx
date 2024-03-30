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
    <div className="bg-gradient-to-r from-rose-400 to-rose-600 p-8 rounded-lg shadow-2xl w-full text-s text-white flex flex-col items-center justify-center my-4 mx-auto sm:w-3/4 lg:w-1/2">
        <div className="text-s flex flex-col items-center justify-center">
        <div className="h1 flex items-center justify-center w-10 h-10 p-2 border-0 rounded-full bg-rose-500 text-white text-xl">
          <i className="fa-solid fa-dumbbell"></i>
        </div>
        <h2 className="mt-8 h2 text-3xl uppercase text-shadow flex justify-end text-rose-100">Fitfolio</h2>
        </div>
        {loading && <LoadingSpinner />}
      {!loading && (
        <>
 <button className="px-4 py-2 bg-rose-700 text-white rounded-md block  hover:bg-rose-600 transition duration-300">
              <Link  to="/fitfolio">home</Link></button> 
        <section className="flex flex-col-reverse sm:flex-row gap-4">
          <div className='m-2 sm:w-2/3 md:w-1/2'>
            <img className="rounded-lg shadow-lg align-center" src={data.gifUrl} alt={data.name} />
            <div className='py-8'>

            <p>
  The {data.name} exercises the{' '}
  <Link to={`${urlbasis}/bodypart/${encodeURIComponent(data.bodyPart.replace(/ /g, '-'))}`} className="font-bold">
    {data.bodyPart}
  </Link> using{' '}
  <Link to={`${urlbasis}/equipment/${encodeURIComponent(data.equipment.replace(/ /g, '-'))}`} className="font-bold">
    {data.equipment}
  </Link>, targeting your{' '}
  <Link to={`${urlbasis}/target/${encodeURIComponent(data.target.replace(/ /g, '-'))}`} className="font-bold">
    {data.target}
  </Link> and the{' '}
  {data.secondaryMuscles && data.secondaryMuscles.length > 0 ? (
  <>
    {data.secondaryMuscles.slice(0, -1).map((muscle, index) => (
      <span key={index}>
        <Link to={`${urlbasis}/target/${encodeURIComponent(muscle.replace(/ /g, '-'))}`} className="font-bold">
          {muscle}
        </Link>
        {index < data.secondaryMuscles.length - 2 && ', '}
      </span>
    ))}
    {' '}
    and{' '}
    <Link to={`${urlbasis}/target/${encodeURIComponent(data.secondaryMuscles[data.secondaryMuscles.length - 1].replace(/ /g, '-'))}`} className="font-bold">
      {data.secondaryMuscles[data.secondaryMuscles.length - 1]}
    </Link>
  </>
) : (
  <span className="font-bold">None</span>
)}

  .
</p>


            </div>
          </div>

          <div className="p-4 text-s flex flex-col-reverse sm sm:mt-0 sm:w-1/2 md:w-2/3">
            <div className="exercise-card">
              <div className="bg-gradient-to-r from-rose-100 via-rose-300 to-rose-200 bg-clip-text">
                <h1 className="p-4 h1 text-4xl uppercase text-shadow flex justify-end text-transparent text-right">{data.name}</h1>
              </div>
              {data.instructions.map((line, i) => <li key={i}>{line}</li>)}
              <ul className="py-4">
              </ul>
            </div>
          </div>
        </section>
      <section>
      <h3 className="my-8 h3 text-xl uppercase text-shadow text-rose-500">
        Related {data.target} Exercises
        </h3>
        <Related lengthWanted={3} categoryName={"target"} subcategory={data.target} />
        <h3 className="my-8 h3 text-xl uppercase text-shadow text-rose-500">
        Related {data.bodyPart} Exercises
        </h3>
        <Related lengthWanted={3} categoryName={"bodypart"} subcategory={data.bodyPart}/>
        <h3 className="my-8 h3 text-xl uppercase text-shadow  text-rose-500">
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
