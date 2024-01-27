<<<<<<< HEAD
import { useEffect, useState } from 'react';
import axios from 'axios';
import Related from './Related';

const Listing = () => {
  const [data, setData] = useState([
    {
      "bodyPart": "waist",
      "equipment": "body weight",
      "gifUrl": "https://images.unsplash.com/photo-1623200216581-969d9479cf7d?q=80&w=470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "id": "0001",
      "name": "3/4 sit-up",
      "target": "abs",
      "secondaryMuscles": [
        "hip flexors",
        "lower back"
      ],
      "instructions": [
        "Lie flat on your back with your knees bent and feet flat on the ground.",
        "Place your hands behind your head with your elbows pointing outwards.",
        "Engaging your abs, slowly lift your upper body off the ground, curling forward until your torso is at a 45-degree angle.",
        "Pause for a moment at the top, then slowly lower your upper body back down to the starting position.",
        "Repeat for the desired number of repetitions."
      ]
    }]
  );
  const [api_key, setApiKey] = useState('');

  useEffect(() => {
    async function loadConfig() {
      try {
        const response = await fetch('/config.json');
        const config = await response.json();
        setApiKey(config.API_KEY);
        console.log(api_key);
      } catch (error) {
        console.error('Error loading config.json:', error);
      }
    }

    loadConfig();
  }, []);

  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-2xl w-full text-s flex flex-col items-center justify-center my-4 mx-auto sm:w-1/2">
      {data.map((exercise, index) => (
        <div>
        <section key={index} className="flex text-rose-900 flex-col sm:flex-row gap-4">
          <div className='m-2 sm:w-2/3 md:w-1/2'>
            <img className=" rounded-lg shadow-lg" src={exercise.gifUrl} alt={exercise.name} />
            <div className='py-8'>
              <p>
                The <span className="font-bold">{exercise.name}</span> exercises the <span className="font-bold">{exercise.bodyPart}</span> 
                &nbsp;using&nbsp;<span className="font-bold">{exercise.equipment}</span>, targeting your <span className="font-bold">{exercise.target}</span>
                &nbsp;and the&nbsp;<span className="font-bold">{exercise.secondaryMuscles.join(", ")}</span>.
              </p>
            </div>
          </div>

          <div className="p-4 text-s -mt-16 flex flex-col sm:mt-0 sm:w-1/2 md:w-2/3">
            <div key={index} className="exercise-card">
              <div className="bg-gradient-to-r from-rose-400 via-rose-500 to-rose-300 bg-clip-text">
                <h1 className="px-4 h1 text-6xl uppercase text-shadow flex justify-end text-transparent text-right">{exercise.name}</h1>
              </div>
              
              <ul className="py-4">
                {exercise.instructions.map((line, i) => <li key={i}>{line}</li>)}
              </ul>
            </div>
          </div>
        </section>
        <Related exercise={exercise} category="target"/>
        <Related exercise={exercise} category="bodyPart"/>
        <Related exercise={exercise} category="equipment"/>

        </div> 
      ))}
    </div>
  );
};

export default Listing;
=======
import { useEffect, useState} from 'react'
import axios from 'axios'

const Listing = () => {

    const [exerciseData, SetExerciseData] = useState({});

    useEffect(() => {
      async function getData() {

        const options = {
        method: 'GET',
        url: 'https://exercisedb.p.rapidapi.com/exercises',
        params: {limit: '1'},
        headers: {
            'X-RapidAPI-Key': 'd0c2867e70msh15316a3fb04a176p19f685jsn939439c671ad',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            
        }
        };

        try {
            const response = await axios.request(options);
            const fetchedData = response.data;
            SetExerciseData(fetchedData);

         
        } catch (error) {
            console.log(error);
        }

            }

      getData()

      }, [])
    
      return (
        <div className="bg-gray-100 p-8 rounded-lg shadow-2xl w-full text-s flex flex-col items-center justify-center my-4 mx-auto sm:w-1/2">
          <h2>Exercise Data:</h2>
          <ul>
            <li>
              <strong>ID:</strong> {exerciseData.id}
            </li>
            <li>
              <strong>Name:</strong> {exerciseData.name}
            </li>
            <li>
              <strong>Body Part:</strong> {exerciseData.bodyPart}
            </li>
            <li>
              <strong>Equipment:</strong> {exerciseData.equipment}
            </li>
            <li>
              <strong>Target:</strong> {exerciseData.target}
            </li>
            <li>
              <strong>Secondary Muscles:</strong> {exerciseData.secondaryMuscles?.join(', ')}
            </li>
            <li>
              <strong>Instructions:</strong> {exerciseData.instructions?.join(', ')}
            </li>
            <li>
              <strong>GIF URL:</strong> {exerciseData.gifUrl}
            </li>
          </ul>
        </div>
      );
    };
       export default Listing
>>>>>>> eaa2280624b5c3fe0d4e74bd52d8cccadf018426
