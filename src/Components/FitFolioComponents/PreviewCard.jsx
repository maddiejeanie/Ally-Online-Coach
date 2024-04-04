import { Link } from 'react-router-dom';

const PreviewCard = ({ exercise }) => {
  return (
    <Link to={`/fitfolio/exercise/${exercise.id}`} className="flex h-full">
          <div className="flex flex-col w-full justify-between bg-gradient-to-r from-orange-500 to-red-600 rounded-md overflow-hidden shadow-lg hover:scale-105 transition-transform 
          duration-300">
        <img className="rounded-t-lg shadow-lg mb-4 bg-white" src={exercise.gifUrl} alt={exercise.name} />

        <h4 className="px-4 text-lg text-center text-white tracking-wide">{exercise.name}</h4>

        <div className="flex flex-wrap justify-center items-end py-2 tracking-wide ">
          {['bodyPart', 'target', 'equipment'].map(property => (
            <p key={property} className="uppercase bg-rose-700 text-white m-1 px-2 py-1 rounded-lg text-xs text-center">
              {exercise[property]}
            </p>
          ))}
        </div>
     
      </div>
    </Link>
  );
};

export default PreviewCard;
