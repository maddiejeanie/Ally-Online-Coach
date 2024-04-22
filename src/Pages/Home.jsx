import React, { useEffect, useState } from 'react';
import TestimonialsSection from '../Components/WebsiteComponents/TestimonialsSection';
import Coaching from "../Components/WebsiteComponents/Coaching"
import Contact from '../Components/WebsiteComponents/Contact';
import SubsiteHeader from '../Components/WebsiteComponents/SubSiteHeader';
const Home = () => {

    const [homeData, sethomeData] = useState([]);
  
    useEffect(() => {
      const PROJECT_ID = 'e8ckavtm'; 
      const DATASET = 'production'; 
  
      const QUERY = '*[_type == "content"]';
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
        })
        .catch((error) => {
          // Handle any errors here
          console.error('Error fetching data:', error);
        });
    }, []);

  return (
    <>

{homeData.length > 0 && (
  <div className="flex justify-center">
    <div className="my-8 md:w-3/4 text-indigo-900">
      <section className="flex flex-col lg:flex-row">
        <div className="flex flex-2 h-96 lg:h-screen lg:w-1/2 lg:pr-4">
          <img className="w-full object-cover object-top border-0 rounded-lg shadow-lg" src="/assets/ally-1.jpg" alt="Ally Personal Trainer" />
        </div>

        <div className="flex lg:w-1/2 lg:pl-4 flex-col">
          <div className="bg-gradient-to-r from-indigo-400 via-purple-500 to-blue-300 bg-clip-text">
            <h1 className="p-4 h1 text-5xl uppercase text-shadow flex justify-end text-transparent text-right">Hi, I'm Ally..</h1>
          </div>
          
          <div className="flex flex-col flex-1 p-4 m-4 md:text-base bg-indigo-200 bg-opacity-95 border-0 border-indigo-900 rounded-lg shadow-lg shadow-pop-br">
            
            {homeData[0].body.map((block, blockIndex) => (
              <div key={blockIndex}>
                <p className="p-2">{block.children.map((child) => child.text).join(' ')}</p>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col flex-1 p-4 m-4 md:text-base bg-indigo-200 bg-opacity-95 border-0 border-indigo-900 rounded-lg shadow-lg shadow-pop-br">
            {homeData[1].body.map((block, blockIndex) => (
              <div key={blockIndex}>
                <p className="p-2">{block.children.map((child) => child.text).join(' ')}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  </div>
)}



    <Coaching />
    <TestimonialsSection />
    <Contact />
  
    </>
  )
}


export default Home