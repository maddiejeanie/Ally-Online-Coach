import React, { useEffect, useState } from 'react';

const Home = () => {

    const [homeData, sethomeData] = useState([]);
  
    useEffect(() => {
      // Construct the Sanity API URL
      const PROJECT_ID = 'e8ckavtm'; // Replace with your Sanity project ID
      const DATASET = 'production'; // Replace with your dataset name
  
      const QUERY = '*[title == "Home"]';
      const PROJECT_URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;
      
      // Make the HTTP request
      fetch(PROJECT_URL)
        .then((response) => {
          // Check if the response status is OK (status code 200)
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          // Parse the JSON response
          return response.json();
        })
        .then((data) => {

          // Update the state with the fetched data
          sethomeData(data.result);
          console.log(homeData)
        })
        .catch((error) => {
          // Handle any errors here
          console.error('Error fetching data:', error);
        });
    }, []);

  return (
    <>
    <div className="mx-auto my-10 md:w-3/4">
  <section className="flex text-indigo-900 flex-col sm:flex-row">
  <div className='m-2 sm:w-2/3 md:w-1/2'>
  <img className="border rounded-lg shadow-lg" src="/assets/ash-clancy-online-coach-3.jpg" alt="Ash Clancy" />
</div>


      <div className="p-4 text-s -mt-16 flex flex-col sm:-ml-40 sm:mt-0 sm:w-1/2 md:w-2/3">
        <div className="bg-gradient-to-r from-indigo-400 via-purple-500 to-blue-300 bg-clip-text ">
          <h1 className="p-4 h1 text-6xl uppercase text-shadow flex justify-end text-transparent text-right ">Hi, I'm Ash..</h1>
        </div>
        
       <div className="p-4 text-sm md:text-base bg-indigo-200 bg-opacity-95 border-0 border-indigo-900 rounded-lg shadow-lg shadow-pop-br">
       {homeData.map(entry => (
  entry.body.map((block, index) => (
    <p className="p-2" key={index}>
      {block.children.map((child) => child.text).join(' ')}
    </p>
  ))
))}


</div>

    </div>
    
    </section>
    
    </div>
    </>
  )
}


export default Home