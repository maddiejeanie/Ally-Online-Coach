import React, { useEffect, useState } from 'react';
import imageUrlBuilder from '@sanity/image-url'
import {createClient} from '@sanity/client'
import { Link } from "react-router-dom";

 const client = createClient({
  projectId: 'e8ckavtm',
  dataset: 'production',
  apiVersion: '2021-08-31',
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
        setBlogData(data.result);
      })
      .catch((error) => {
        // Handle any errors here
        console.error('Error fetching data:', error);
      });
  }, []);


  function renderBodyContent(body) {
    const maxCharacters = 200; // Adjust this value as needed
  
    const fullText = body.map((block) => block.children.map((child) => child.text).join(' ')).join('');
  
    const truncatedText = fullText.slice(0, maxCharacters);
  
    const ellipsis = fullText.length > maxCharacters ? '..' : '';
  
    return <div>{truncatedText + ellipsis}</div>;
  }
  
  const handleNavClick = () => {
   window.scrollTo(0, 0);
  };
  

  return (
    <>
      <div className="w-full md:w-2/3 p-4 text-sm md:text-base mx-auto justify-center text-indigo-400 m-4">
        <div className="bg-gradient-to-r from-indigo-400 via-purple-500 to-blue-300 bg-clip-text">
          <h1 className="p-4 h1 text-5xl uppercase flex justify-start text-transparent text-left">
            Thoughts from Ally..
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogData.map((blogPost) => (
            <div
        key={blogPost._id}
              className="p-4 border-0 rounded-lg shadow-lg bg-indigo-200 flex flex-col justify-between">
              
              <div className='flex justify-between items-center gap-4 pb-4'>
                <div className="text-white h1 px-2 py-1 bg-indigo-400 border-0 rounded-md uppercase"><p><i className="fa-solid fa-tag"></i> {blogPost.categories}</p></div>
                <div className="font-bold text-indigo-500"><p>{blogPost.date}</p></div>
              </div>
              <img src={urlFor(blogPost.featuredImage)}
                className='rounded-md border-0 w-full h-60 object-cover'
                alt={blogPost.title}
              />
              <Link onClick={handleNavClick} to={`/blog/${blogPost.slug.current}`} state={{ blogData }}><h2 className="py-2 h1 text-lg">{blogPost.title}</h2></Link>
              <div className="text-indigo-900">
              {renderBodyContent(blogPost.body)}
            </div>
            <div className="flex justify-center">
            <Link onClick={handleNavClick} to={`/blog/${blogPost.slug.current}`} state={{ blogData }}>
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
