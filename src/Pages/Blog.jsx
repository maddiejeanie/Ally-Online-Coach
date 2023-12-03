import React, { useEffect, useState } from 'react';
import imageUrlBuilder from '@sanity/image-url'
import sanityClient from '@sanity/client'
import { Link } from "react-router-dom";

 const client = sanityClient({
  projectId: 'e8ckavtm',
  dataset: 'production',
   useCdn: true, // set to `false` to bypass the edge cache

})

const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}

const Blog = () => {
  // Define blogData state and setBlogData function
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    // Construct the Sanity API URL
    const PROJECT_ID = 'e8ckavtm'; // Replace with your Sanity project ID
    const DATASET = 'production'; // Replace with your dataset name

    const QUERY = '*[_type == "blogPost"]';
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
        // Handle the fetched data here
        console.log('Fetched data:', data);
        // Update the state with the fetched data
        setBlogData(data.result);
      })
      .catch((error) => {
        // Handle any errors here
        console.error('Error fetching data:', error);
      });
  }, []);


  function renderBodyContent(body) {
    const maxWords = 20;
  
    // Combine all text from blocks into a single string
    const fullText = body.map((block) => block.children.map((child) => child.text).join(' ')).join(' ');
  
    // Split the text into words
    const words = fullText.split(' ');
  
    // Combine the words into a truncated string
    const truncatedText = words.slice(0, maxWords).join(' ');
  
    // Add ellipsis if there are more words
    const ellipsis = words.length > maxWords ? '..' : '';
  
    return <div>{truncatedText + ellipsis}</div>;
  }
  
  

  return (
    <>
      <div className="w-full md:w-2/3 p-4 text-sm md:text-base mx-auto justify-center text-indigo-400 m-4">
        <div className="bg-gradient-to-r from-indigo-400 via-purple-500 to-blue-300 bg-clip-text">
          <h1 className="p-4 h1 text-6xl uppercase flex justify-start text-transparent text-left">
            Thoughts from Ash..
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogData.map((blogPost) => (
            <div
              key={blogPost._id}
              className="p-4 border-0 rounded-lg shadow-lg bg-indigo-200 flex flex-col justify-between">
              
              <div className='flex justify-between items-center gap-4'>
                <div className="text-white h1 px-2 py-1 bg-indigo-400 border-0 rounded-md uppercase"><p><i className="fa-solid fa-tag"></i> {blogPost.categories}</p></div>
                <div className="font-bold text-indigo-500"><p>{blogPost.date}</p></div>
              </div>
              <img src={urlFor(blogPost.featuredImage)}
                className='rounded-md border-0 m-4 h-40 object-cover'
                alt='Your image alt text'
              />
              <Link to={`/blog/${blogPost.slug.current}`} state={{ blogData }}><h2 className="p-2 h1 text-lg">{blogPost.title}</h2></Link>
              <div className="text-indigo-900">
              {renderBodyContent(blogPost.body)}
            </div>
            <div className="flex justify-center">
            <Link to={`/blog/${blogPost.slug.current}`} state={{ blogData }}>
                <button className="text-white bg-indigo-400 h1 px-2 mt-4 hover:bg-white hover:text-indigo-400 transition delay-200 border-2 border-indigo-400 rounded-md text-lg uppercase font-bold">Read More</button></Link>
                </div>

            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
