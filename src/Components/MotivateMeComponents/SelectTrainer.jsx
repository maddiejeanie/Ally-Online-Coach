import { TrainerData } from "./TrainerData";
import { useState } from "react";

const SelectTrainer = ({ onTrainerSelected }) => {
  const [selectedTrainer, setSelectedTrainer] = useState(null);

  const handleClick = (trainer) => {
    setSelectedTrainer(trainer);
  };

  return (
  <>
      <p className="my-4 text-justify">
        Introducing MotivateMe, the innovative AI-powered personal trainer and
        motivator! Harnessing the cutting-edge <strong>OpenAI API</strong>,
        MotivateMe offers a revolutionary approach to fitness inspiration. With
        just a simple request, you can access a diverse array of motivational
        insights tailored to your preferences. Select from three distinct AI
        personalities, each equipped to guide and empower you on your fitness
        journey. Let's ignite your motivation and achieve greatness together!
        💪🤖
      </p>
      <h2 className="h2 text-3xl uppercase text-shadow flex text-teal-100 font-bold tracking-wide mt-4">
        Select Your Trainer
      </h2>
      <div className="flex justify-center gap-4 my-4">
  {TrainerData.map((trainer) => (
    trainer != selectedTrainer &&
    <div
      key={trainer.name}
      onClick={() => handleClick(trainer)}
      className="w-1/3 border-0 rounded-lg shadow-lg bg-emerald-400 cursor-pointer hover:scale-105 transition-transform duration-300"
     
    >
      <div className="p-2 flex flex-col items-center">
        <img
          className="rounded-xl shadow-xl transform"
          src={trainer.image}
          alt={trainer.name}
        />
        <h2 className="pt-2 h2 text-xl uppercase text-shadow flex justify-center">
          {trainer.name}
        </h2>
      </div>
    </div>
  ))}
</div>

      {selectedTrainer && (
        <div className="flex m-4">
         <div className="text-left flex flex-col w-1/3 items-center">
          <p className="my-2">{selectedTrainer.name} says</p>
         <img
              className="h-26 w-26 rounded-full object-cover "
              src={selectedTrainer.image}
              alt={selectedTrainer.name} />
              </div>
        <div className="flex self-end ml-4 mb-4 bg-gray-300 text-green-800 rounded-bl-none p-2 rounded-2xl ">  

           {selectedTrainer.catchphrase}
      
        </div>
        </div>
      )}
   
        <button
          onClick={() => onTrainerSelected(selectedTrainer)}
          className={`w-full p-4 border-0 rounded-lg shadow-lg bg-emerald-500 text-white cursor-pointer hover:bg-emerald-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50`}
        >
          Confirm
        </button>
    
      

  
  </>);
};

export default SelectTrainer;