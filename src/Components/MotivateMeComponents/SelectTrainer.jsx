import { TrainerData } from "./TrainerData";
import { useState } from "react"

const SelectTrainer = ({ onTrainerSelected }) => {
const [selectedTrainer, setSelectedTrainer] = useState(null);

const handleClick = (trainer) => {
  setSelectedTrainer(trainer);
};

return (
  <>
  
  <p className="my-4 md:w-2/3 text-justify">
Introducing MotivateMe, your AI personal trainer and motivator! Simply request some motivation, and choose from three different personalities to guide and inspire you! Let's get motivated! 💪🤖</p>

      <h2 className="m-8 h2 text-xl uppercase text-shadow flex justify-center text-teal-100">Select Your Trainer</h2>

<div className="flex flex-col gap-8 sm:w-2/3">
  {TrainerData.map((trainer) => (
    <div
      key={trainer.name}
      onClick={() => handleClick(trainer)}
      className={`border-0 rounded-lg shadow-lg bg-emerald-400 flex flex-col sm:flex-row
      items-center
      justify-around text-white cursor-pointer 
      hover:scale-105 transition-transform duration-300`}
    >
      <div className="p-4 flex flex-col w-1/2 items-center">
        <img
          className="rounded-xl shadow-xl transform"
          src={trainer.image}
          alt={trainer.name}
        />
        <h2 className="pt-2 h2 text-xl uppercase text-shadow flex justify-center">{trainer.name}</h2>
      </div>
      
      {selectedTrainer === trainer && (
        <div className=" bg-emerald-600 rounded-b-lg sm:rounded-r-lg p-4 sm:w-1/2 flex flex-row sm:flex-col justify-center self-stretch">
          <div className="float-left">
            <i className="fa-solid fa-quote-left text-2xl px-4 text-teal-300"></i>
            <p className="text-left text-white">{trainer.catchphrase}</p>
            <div className="flex items-end justify-end">
              <i className="fa-solid fa-quote-right text-2xl px-4 text-teal-300"></i>
            </div>
          </div>
        </div>
      )}
    </div>
  ))}



      
      <button
  onClick={() => onTrainerSelected(selectedTrainer)}
  className={`w-full p-4 border-0 rounded-lg shadow-lg bg-emerald-500 text-white cursor-pointer hover:bg-emerald-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50`}
>
  Confirm
</button>
</div>
</>
  );
            }

export default SelectTrainer