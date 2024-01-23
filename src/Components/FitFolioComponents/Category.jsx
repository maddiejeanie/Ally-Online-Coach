import React, { useState, useEffect } from "react";
import axios from 'axios';

const Category = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    async function getData() {
      const options = {
        method: 'GET',
        url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        headers: {
          'X-RapidAPI-Key': 'd0c2867e70msh15316a3fb04a176p19f685jsn939439c671ad',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        const fetchedData = response.data;
        setData(fetchedData);
      } catch (error) {
        console.error(error);
      }
    }

    getData();
  }, []); // Empty dependency array ensures useEffect runs once when the component mounts

  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-2xl w-full text-s flex flex-col items-center justify-center my-4 mx-auto sm:w-1/2">
      <div className="h1 flex items-center justify-center w-10 h-10 p-2 border-0 rounded-full bg-rose-500 text-white text-xl">
        <i className="fa-solid fa-dumbbell"></i>
      </div>
      <h2 className="m-8 h2 text-3xl uppercase text-shadow flex justify-center text-rose-500">FitFolio</h2>

      <p>Body Part</p>
      <p>api call to bodypartlist</p>
      {data && data.map((category) => (
  <p key={category}>{category}</p>
))}

    </div>
  );
};

export default Category;
