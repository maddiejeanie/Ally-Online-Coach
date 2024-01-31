import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const PreviewCard = ({ exercise, category, length }) => {
    const repeatedData = Array.from({ length }, (_, index) => exercise);
  
  return (
 
    <div>
<h3 className="h3 text-2xl uppercase text-rose-900 py-4">
  Related {category === "target" ? `Target Muscles: ${exercise.target}` :
           category === "equipment" ? `Equipment: ${exercise.equipment}` :
           `Body Parts: ${exercise.bodyPart}`}
</h3>

 

        <section className="grid grid-cols-3 gap-4">
          {repeatedData.flat().map((exercise, index) => (
                  <Link to={`/fitfolio/exercise/${exercise.id}`}>
          <div className=" bg-rose-200 rounded-lg shadow-lg text-s p-4">
  <img className="rounded-lg shadow-lg mb-4" src={exercise.gifUrl} alt={exercise.name} />

  <h1 className="py-2 h1 text-xl  text-rose-900 uppercase text-shadow text-center">{exercise.name}</h1>

  <div className="flex flex-wrap justify-center">
  {['bodyPart', 'target', 'equipment'].map(property => (
    <p key={property} className="uppercase bg-rose-500 text-white m-1 px-2 py-1 rounded-lg text-xs text-center">
      {exercise[property]}
    </p>
  ))}
</div>
</div>
</Link>
))
}

            </section>
              


        
      </div>
  );
  
};

export default PreviewCard;
