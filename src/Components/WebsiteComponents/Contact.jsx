import React from 'react';

const Contact = () => {
  return (
    <div className='mt-8 mx-auto lg:w-3/4'>
      <div className="flex flex-col md:flex-row">
        <div className="sm:w-1/2 p-4 text-sm md:text-base flex flex-col text-indigo-900">
          <img src="/public/assets/ally-2.jpg" alt="Contact Form Ally Personal Trainer" className="object-cover shadow-lg rounded-lg mx-auto mt-4 h-3/4" />
        </div>

        <div className="w-full p-4 mt-2 text-s items-center justify-center mx-auto text-indigo-900">
          <div className="bg-gradient-to-r from-indigo-400 via-purple-500 to-blue-300 bg-clip-text">
            <h1 className="h1 text-6xl uppercase text-shadow flex justify-end text-transparent">Start your journey..</h1>
          </div>
          
          <form action="https://getform.io/f/3d45e44f-c964-4deb-8055-0933fa59eb9a" method="POST">
            <label htmlFor="name" className="text-indigo-700">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              className="block w-full m-2 px-4 py-2 border-0 border-indigo-900 shadow-lg shadow-pop-br rounded-lg bg-indigo-200 text-indigo-700 focus:outline-none focus:bg-indigo-100"
              required
            />
            
            <label htmlFor="email" className="text-indigo-700">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className="block w-full m-2 px-4 py-2 border-0 border-indigo-900 shadow-lg shadow-pop-br rounded-lg bg-indigo-200 text-indigo-700 focus:outline-none focus:bg-indigo-100"
              required
            />
            
            <label htmlFor="phone" className="text-indigo-700">Phone:</label>
            <input
              type="number"
              id="phone"
              name="phone"
              className="block w-full m-2 px-4 py-2 border-0 border-indigo-900 shadow-lg shadow-pop-br rounded-lg bg-indigo-200 text-indigo-700 focus:outline-none focus:bg-indigo-100"
              required
            />
            
            <label htmlFor="message" className="text-indigo-700">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="block w-full m-2 px-4 py-2 border-0 border-indigo-900 shadow-lg shadow-pop-br rounded-lg bg-indigo-200 text-indigo-700 focus:outline-none focus:bg-indigo-100"
              required
            ></textarea>
            
            {/* Anti-spam field */}
            <input type="hidden" name="_gotcha" style={{ display: "none !important" }} />
            
            <div className="flex justify-end">
              <button
                type="submit"
                className="my-2 w-1/3 px-4 py-2 text-white bg-indigo-500 rounded-lg shadow-lg hover:bg-indigo-400 focus:outline-none focus:bg-indigo-400"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
