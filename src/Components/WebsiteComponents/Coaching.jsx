import React from 'react'

const Coaching = () => {
  return (
    <>
<div className="w-full sm:w-3/4 p-4 md:text-base mx-auto justify-center text-indigo-400 m-4">
<div className=" bg-gradient-to-r from-indigo-400 via-purple-500 to-blue-300 bg-clip-text ">
          <h1 className="my-4 h1 text-6xl uppercase text-shadow flex text-transparent">Why coaching?</h1>
        </div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">

<div className=" p-4 border-0 rounded-lg shadow-lg   bg-indigo-200 flex flex-col items-center justify-center">
    <i className="fa-solid fa-dumbbell text-6xl mx-auto "></i>
    <p className="h2 text-lg my-4 text-center">Personalised<br />Training Plan</p>
    <p className="text-justify text-indigo-900">A training plan bespoke to you. Our Trainerize platform will give you access to your program alongside an extensive exercise library, so you can record every step of your journey.</p>
  </div>

  <div className="p-4 border-0 rounded-lg shadow-lg  bg-indigo-200 flex flex-col items-center justify-center">

    <i className="fa-solid fa-bowl-food text-6xl mx-auto"></i>
    <p className="h2 text-lg my-4 text-center">Nutrition<br />Support</p>
    <p className="text-justify text-indigo-900">Food is fuel. My nutritional support is a tailored approach, understanding that to change eating habits is a process that requires time & support. I will help you make better choices, that align with your goals & lifestyle.</p>
  </div>
 
  <div className="p-4 border-0 rounded-lg shadow-lg  bg-indigo-200 flex flex-col items-center justify-center">

    <i className="fa-solid fa-ranking-star text-6xl mx-auto"></i>
    <p className="h2 text-lg my-4 text-center">Ongoing<br />Assessments</p>
    <p className="text-justify text-indigo-900">If you don't assess, you guess. We will use a combination of assessment tools including a Movement Screen, Video Analysis & monthly Reviews to ensure that you are getting the best experience possible & moving forward.</p>
  </div>

  <div className="p-4 border-0 rounded-lg shadow-lg bg-indigo-200 flex flex-col items-center justify-center ">

    <i className="fa-solid fa-comments text-6xl mx-auto"></i>
    <p className="h2 text-lg my-4 text-center">Regular<br />Communication</p>
    <p className="text-justify text-indigo-900">Your success lies in the actions you take outside of your PT sessions. To help you through those times, we strive for regular contact - through unlimited email with 12-hour response time & regular messaging.</p>
  </div>
</div>

</div>
</>
  )
}

export default Coaching