import React, { useEffect, useState } from 'react';

const About = () => {
  // Define blogData state and setBlogData function
  const [contentData, setContentData] = useState([]);

  useEffect(() => {
    // Construct the Sanity API URL
    const PROJECT_ID = 'e8ckavtm'; // Replace with your Sanity project ID
    const DATASET = 'production'; // Replace with your dataset name

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
        setContentData(data.result);
      })
      .catch((error) => {
        // Handle any errors here
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
    <div className="mx-auto mt-10 md:w-3/4">
  <section className="flex flex-col-reverse text-indigo-900 sm:flex-row">
      <div className="p-4 text-sm md:text-base -mt-16 sm:-mr-40 sm:mt-0 sm:w-1/2 md:w-2/3 sm:z-10">
        <div className="bg-gradient-to-r from-indigo-400 via-purple-500 to-blue-300 bg-clip-text ">
          <h1 className="p-4 h1 text-6xl uppercase flex justify-start text-transparent text-left ">A bold and truthful life..</h1>
        </div>
        <div className="p-4 bg-indigo-200 bg-opacity-95 border-0 border-indigo-900 rounded-lg shadow-lg shadow-pop-br">
        {contentData.filter(entry => entry.title === 'About1').map(entry => (
  entry.body.map((block, index) => (
    <p className="p-2" key={index}>
      {block.children.map((child) => child.text).join(' ')}
    </p>
  ))
))}
    </div>
</div>
  <div className='m-2 sm:w-2/3 md:w-1/2 bg-cover bg-center'>
  <img className="border-0 rounded-lg shadow-lg w-full h-3/4 object-cover object-center" src="/assets/ash-3.jpg" alt="Ash Personal Trainer" />
</div>
</section>
    </div>
    
    <div className="mx-auto mb-10 md:w-3/4">
    <section className="flex text-indigo-900 flex-col sm:flex-row">
  <div className='m-2 bg-cover bg-center sm:w-2/3 md:w-1/2'>
  <img className="border rounded-lg shadow-lg w-full h-3/4 object-cover object-center" src="/assets/ash-2.jpg" alt="Ash Personal Trainer" />
</div>
      <div className="p-4 text-s -mt-16 sm:-ml-40 sm:mt-0 sm:w-1/2 md:w-2/3">
        <div className="bg-gradient-to-r from-indigo-400 via-purple-500 to-blue-300 bg-clip-text ">
          <h1 className="p-4 h1 text-6xl uppercase text-shadow flex justify-end text-transparent text-right ">And then..</h1>
        </div>
        <div className="p-4 text-sm md:text-base bg-indigo-200 bg-opacity-95 border-0 border-indigo-900 rounded-lg shadow-lg shadow-pop-br">
        {contentData.filter(entry => entry.title === 'About2').map(entry => (
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

export default About