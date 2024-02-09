import { useEffect, useState } from 'react';
import PreviewCard from './PreviewCard';
import { useParams, Link } from 'react-router-dom';
import { fetchData, options } from './fetchData';
import LoadingSpinner from './LoadingSpinner';
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
    <div className="bg-gray-100 p-8 rounded-lg shadow-2xl w-full text-s flex flex-col items-center justify-center my-4 mx-auto sm:w-1/2">
      {loading && <LoadingSpinner />}
      {!loading && (
        <section className="flex text-rose-900 flex-col-reverse sm:flex-row gap-4">
          <div className='m-2 sm:w-2/3 md:w-1/2'>
            <img className="rounded-lg shadow-lg align-center" src={data.gifUrl} alt={data.name} />
            <div className='py-8'>

<p>
  The {data.name} exercises the{' '}
  <Link to={`${urlbasis}/bodypart/${data.bodyPart.replace(/ /g, '-')}`} className="font-bold">
    {data.bodyPart}
  </Link> using{' '}
  <Link to={`${urlbasis}/equipment/${data.equipment.replace(/ /g, '-')}}`} className="font-bold">
    {data.equipment}
  </Link>, targeting your{' '}
  <Link to={`${urlbasis}/target/${data.target.replace(/ /g, '-')}}`} className="font-bold">
    {data.target}
  </Link> and the{' '}
  {data.secondaryMuscles && data.secondaryMuscles.length > 0 ? (
    <>
      <span className="font-bold">
        {data.secondaryMuscles.slice(0, -1).join(', ')}
      </span>{' '}
      and{' '}
      <Link to={`${urlbasis}/target/${data.secondaryMuscles[data.secondaryMuscles.length - 1].replace(/ /g, '-')}}`} className="font-bold">
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
              <div className="bg-gradient-to-r from-rose-400 via-rose-500 to-rose-300 bg-clip-text">
                <h1 className="p-4 h1 text-4xl uppercase text-shadow flex justify-end text-transparent text-right">{data.name}</h1>
              </div>
              {data.instructions.map((line, i) => <li key={i}>{line}</li>)}
              <ul className="py-4">
              </ul>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Listing;
