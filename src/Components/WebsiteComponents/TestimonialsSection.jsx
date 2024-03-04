import React, { useEffect, useState } from 'react';
import imageUrlBuilder from '@sanity/image-url'
import { createClient } from '@sanity/client'

const TestimonialsSection = () => {
    
    const client = createClient({
        projectId: 'e8ckavtm',
        dataset: 'production',
         useCdn: true, // set to `false` to bypass the edge cache
           apiVersion: '2024-01-24'
      
      })
      
      const builder = imageUrlBuilder(client)
      
      function urlFor(source) {
        return builder.image(source)
      }
      
        // Define blogData state and setBlogData function
        const [testimonialData, setTestimonialData] = useState([]);
      
       useEffect(() => {
  
          const PROJECT_ID = 'e8ckavtm';
          const DATASET = 'production';
          const QUERY = '*[_type == "testimonial"]';
          const PROJECT_URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;
          
          // Make the HTTP request
          fetch(PROJECT_URL)
            .then((response) => {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              return response.json();
            })
            .then((data) => {

              setTestimonialData(data.result);
            })
        }, []); 
      

  return (

        <div className="w-3/4 p-4 text-sm md:text-base mx-auto text-indigo-400 m-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

          {testimonialData.map((testimonial, index) => (
  <div key={index} className="relative p-4 border-0 rounded-lg shadow-lg bg-indigo-200 flex flex-col">
    <div className="float-left">
      <i className="fa-solid fa-quote-left text-8xl px-4 text-violet-300"></i>
    </div>
    <div className="flex items-center justify-center py-4 -mt-16">
      <img
        className="border-0 h-32 w-32 rounded-full shadow-pop-br object-cover object-center"
        src={urlFor(testimonial.photo)}
        alt={testimonial.name}
        key={testimonial.id}
      />
    </div>
    <div className="py-2 text-xl text-center">
      {testimonial.name}, {testimonial.yearsTraining} {testimonial.yearsTraining > 1? 'years': 'year'} of training
    </div>
    <div className="z-10">
      <p className="text-indigo-900 text-justify">{testimonial.testimony}</p>
      <div className="absolute bottom-0 right-0 -z-10">
    <i className="fa-solid fa-quote-right text-8xl px-4 text-violet-300 mt-8"></i>
  </div>
    </div>
  </div>
))}

            
          </div>
        </div>
      );
    };



export default TestimonialsSection