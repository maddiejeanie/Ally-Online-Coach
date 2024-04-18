import { Link } from 'react-router-dom';
import PreviewCard  from './PreviewCard';

const Related = ({ data, lengthWanted, categoryName, subcategory }) => {
  return (
    <div>
      {Array.isArray(data) && data.length > 0 && (
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 items-stretch">
          {data
            .filter((item) => item.name !== subcategory)
            .slice(0, lengthWanted)
            .map((exercise, index) => (
              <Link
                key={index}
                to={`/fitfolio/exercise/${exercise.id}`}
                className="flex flex-col h-full"
              >
                <PreviewCard key={exercise.id} exercise={exercise} className="flex-grow" />
              </Link>
            ))}
        </section>
      )}
    </div>
  );
};

export default Related;
