import { useEffect, useState } from 'react';
import axios from 'axios';

const Related = ({ exercise, category }) => {
    const repeatedData = Array.from({ length: 3 }, (_, index) => exercise);
  
  return (
 
    <div>
        <h3 className="h3 text-2xl uppercase text-rose-900 py-4">Related {category === "target"? "Target Muscles": category === "equipment"? "Equipment": "Body Parts"}</h3>
 

          <section className="flex gap-4 ">
          {repeatedData.flat().map((exercise, index) => (
          <div className="w-1/3 bg-rose-200 rounded-lg shadow-lg text-s p-4">
  <img className="rounded-lg shadow-lg mb-4" src={exercise.gifUrl} alt={exercise.name} />

  <h1 className="py-2 h1 text-xl  text-rose-900 uppercase text-shadow text-center">{exercise.name}</h1>

  <div className="flex flex-wrap justify-center">
    <p className="uppercase bg-rose-500 text-white m-1 px-2 py-1 rounded-lg text-xs text-center">
        {exercise[category]}</p>
       
    
    {category === "target" && exercise.secondaryMuscles.map(muscle => (
      <p key={muscle} className="uppercase bg-rose-500 text-white m-1 px-2 py-1 rounded-lg text-xs">{muscle}</p>
    ))}
  </div>
</div>
))
}

            </section>
              


        
      </div>
  );
  
};

export default Related;
