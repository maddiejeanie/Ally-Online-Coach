import { Link } from 'react-router-dom';

const PreviewCard = ({ exercise }) => {
  return (
    <Link to={`/fitfolio/exercise/${exercise.id}`} className="block h-full">
      <div className="bg-rose-200 rounded-lg shadow-lg text-s p-4 h-full flex flex-col justify-between">
        <img className="rounded-lg shadow-lg mb-4" src={exercise.gifUrl} alt={exercise.name} />

        <h1 className="py-2 h1 text-l text-rose-900 uppercase text-shadow text-center">{exercise.name}</h1>

        <div className="flex flex-wrap justify-center">
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
