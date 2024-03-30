import React, { useEffect, useState } from 'react';
import imageUrlBuilder from '@sanity/image-url';
import {createClient} from '@sanity/client';
import { useParams, useLocation } from 'react-router-dom'; 
import { Link } from "react-router-dom";


const builder = imageUrlBuilder(createClient({
  projectId: 'e8ckavtm',
  dataset: 'production',
  apiVersion: '2021-08-31',
  useCdn: true, // set to `false` to bypass the edge cache
}));

function urlFor(source) {
  return builder.image(source);
}

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

const IndvBlogPost = () => {
  // Get the slug from the URL
  const { slug } = useParams();
  const location = useLocation();

  // Access the blogData from location state
  const blogData = location.state?.blogData || [];

  // Find the blog post that matches the current slug
  const matchingPost = blogData.find((post) => post.slug.current === slug);

  if (!matchingPost) {
    // Handle the case when no matching post is found
    return <div>Blog post not found</div>;
  }
  
  const handleNavClick = () => {
    window.scrollTo(0, 0);
   };
   
  return (
    <>
    <div className="w-full md:w-2/3 p-4 text-sm md:text-base mx-auto justify-center text-indigo-400 m-4">
      <div className="bg-gradient-to-r from-indigo-400 via-purple-500 to-blue-300 bg-clip-text">
        <h1 className="p-4 h1 text-6xl uppercase flex justify-start text-transparent text-left">
          {matchingPost.title}
        </h1>
      </div>
      <div className="my-8 p-4 border-0 rounded-lg shadow-lg bg-indigo-200">
        <div className="flex justify-between items-center gap-4">
          <div className="text-white h1 px-2 py-1 bg-indigo-400 border-0 rounded-md uppercase">
            <p>
              <i className="fa-solid fa-tag"></i> {matchingPost.categories}
            </p>
          </div>
          <div className="font-bold text-indigo-500">
            <p>{matchingPost.date}</p>
          </div>
        </div>
        <img
          src={urlFor(matchingPost.featuredImage)}
          className="rounded-md border-0 m-4 w-full h-64 mx-auto object-cover"
          alt="{matchingPost.title}"
        />
<div className="text-indigo-900">
  {matchingPost.body.map((block, index) => (
    <p key={index} className="p-2">
      {block.children.map((child, childIndex) => (
        <span key={childIndex}>{child.text}</span>
      ))}
    </p>
  ))}
</div>

      </div>
 
      <div className="bg-gradient-to-r from-indigo-400 via-purple-500 to-blue-300 bg-clip-text">
      <h1 className="p-4 h1 text-3xl uppercase flex justify-start text-transparent text-left">
          Related content
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  {blogData
    .filter((blogPost) => blogPost.slug.current !== window.location.pathname.split('/').pop())
    .slice(0, 3)
    .map((blogPost) => (
      <div
        key={blogPost._id}
        className="p-4 border-0 rounded-lg shadow-lg bg-indigo-200 flex flex-col justify-between"
      >
        <div className='flex justify-between items-center gap-4'>
          <div className="text-white h1 px-2 py-1 bg-indigo-400 border-0 rounded-md uppercase">
            <p><i className="fa-solid fa-tag"></i> {blogPost.categories}</p>
          </div>
          <div className="font-bold text-indigo-500">
            <p>{blogPost.date}</p>
          </div>
        </div>
        
        <img
          src={urlFor(blogPost.featuredImage)}
          className='rounded-md border-0 m-4 h-40 object-cover'
          alt='Your image alt text'
        />
        <Link to={`/blog/${blogPost.slug.current}`} state={{ blogData }}>
        <h2 className="p-2 h1 text-lg">{blogPost.title}</h2>
        <div className="text-indigo-900">
          {renderBodyContent(blogPost.body)}
        </div>
        </Link>
        <div className="flex justify-center">

        <Link to={`/blog/${blogPost.slug.current}`} state={{ blogData }}>
        <button onClick={handleNavClick}  className="text-white bg-indigo-400 h1 px-2 mt-4 hover:bg-white hover:text-indigo-400 transition delay-200 border-2 border-indigo-400 rounded-md text-lg uppercase font-bold">Read More</button></Link>

        </div>
      </div>
    ))}
</div>
</div>
</>
  );
};

export default IndvBlogPost;
