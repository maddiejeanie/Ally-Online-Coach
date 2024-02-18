import { TrainerData } from "./TrainerData";
import { useState } from "react"

const SelectTrainer = ({ onTrainerSelected }) => {
const [selectedTrainer, setSelectedTrainer] = useState(null);

const handleClick = (trainer) => {
  setSelectedTrainer(trainer);
};

return (
  <>
  
      <p className="sm:w-1/2 text-justify">Introducing MotivateMe, your AI personal trainer and motivator! Simply request some motivation, and choose from three different personalities to guide and inspire you! Let's get motivated! 💪🤖</p>

      <h2 className="m-8 h2 text-xl uppercase text-shadow flex justify-center text-teal-500">Select Your Trainer</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {TrainerData.map((trainer) => (
          <div
            key={trainer.name}
            onClick={() => handleClick(trainer)}
            className={`p-4 border-0 rounded-lg shadow-lg bg-emerald-400 flex flex-col items-center  text-white justify-center cursor-pointer hover:bg-emerald-600 ${selectedTrainer === trainer ? 'bg-emerald-600' : ''}`}
          >
            <img
  className={`rounded-xl shadow-xl transform ${selectedTrainer === trainer ? 'hover:scale-105 transition-transform duration-300' : ''}`}
  src={trainer.image}
              alt={trainer.name}
            />
            <h2 className="m-8 h2 text-xl uppercase text-shadow flex justify-center">{trainer.name}</h2>
            {selectedTrainer === trainer && (
              <p className="text-center">{trainer.promptNotesforTrainer.style}</p>
            )}
          </div>
        ))}

      </div>
      <button
  onClick={() => onTrainerSelected(selectedTrainer)}
  className={`w-full p-4 my-4 border-0 rounded-lg shadow-lg bg-emerald-400 text-white cursor-pointer hover:bg-emerald-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50`}
>
  Confirm
</button>
</>
  );
            }

export default SelectTrainer