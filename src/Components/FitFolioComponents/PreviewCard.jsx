import { Link } from 'react-router-dom';

const PreviewCard = ({ exercise }) => {
  return (
    <Link to={`/fitfolio/exercise/${exercise.id}`} className="flex h-full">
          <div className="flex flex-col w-full justify-between bg-rose-200 rounded-md overflow-hidden shadow-lg hover:scale-105 transition-transform 
          duration-300">
        <img className="rounded-lg shadow-lg mb-4 bg-white" src={exercise.gifUrl} alt={exercise.name} />

        <h4 className="px-4 text-lg font-semibold text-center text-rose-500">{exercise.name}</h4>

        <div className="flex flex-wrap justify-center items-end py-2 ">
          {['bodyPart', 'target', 'equipment'].map(property => (
            <p key={property} className="uppercase bg-rose-500 text-white m-1 px-2 py-1 rounded-lg text-xs text-center">
              {exercise[property]}
            </p>
          ))}
        </div>
     
      </div>
    </Link>
  );
};

export default PreviewCard;
