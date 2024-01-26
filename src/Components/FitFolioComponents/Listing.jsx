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