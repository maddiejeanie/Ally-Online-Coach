import React, { useState } from 'react';
import { Link } from "react-router-dom";


const Navbar = () => {

const [hamNavOpen, setHamNavOpen] = useState(false)

const toggleHamNav = () => {
  setHamNavOpen((prevHamNavOpen) => !prevHamNavOpen)
}

const NavMenu = () => {
  return (
    <div className="h1 text-2xl uppercase font-bold text-white w-full md:flex md:flex-row items-center justify-center align-center">
    <div className='bg-indigo-300 w-full md:bg-inherit'><Link to="/" className="px-2 hover:text-indigo-500 transition delay-200">Home</Link></div>
    <div className='bg-indigo-400 w-full  md:bg-inherit'><Link to="/about" className="px-2 hover:text-indigo-500 transition delay-200">About</Link></div>
    <div className='bg-indigo-500 w-full  md:bg-inherit'><Link to="/coaching" className="px-2 hover:text-indigo-400 transition delay-200">Coaching</Link></div>
    <div className='bg-indigo-600 w-full  md:bg-inherit'><Link to="/blog" className="px-2 hover:text-indigo-400 transition delay-200">Blog</Link></div>
    <div className='bg-indigo-700 w-full  md:bg-inherit'><i href="http://instagram.com/bbyc.xo" className="px-2 hover:text-indigo-500 transition delay-200 fa-brands fa-instagram"></i></div>
    <div className='bg-indigo-800 w-full  md:bg-inherit'><i className="px-2 hover:text-indigo-500 transition delay-200 fa-brands fa-whatsapp"></i></div>
    </div>
  )
}


  return (
    <>
  <div className="flex flex-basis-1 flex-row items-center bg-indigo-300 p-2">

  <div className="h1 flex items-center justify-center w-14 h-14 border-0 rounded-full bg-indigo-500 text-white text-xl px-4">
  <i class="fa-solid fa-dumbbell"></i>
  </div>


  <div className='hidden md:block'>{NavMenu()}</div>
  <div className="flex flex-basis-2 w-full justify-center items-center md:justify-end">
    <Link to="/contact">
      <button className="text-white h1 px-4 hover:bg-indigo-400 transition delay-200 border-2 rounded-md text-2xl uppercase font-bold -ml-8">Contact</button>
    </Link>
  </div>

  <div className={`md:hidden flex-basis-1 text-2xl text-indigo-50 ${hamNavOpen ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
    {hamNavOpen ?
      <i className="fa-solid fa-bars hover:text-indigo-500 transition delay-200 hover:cursor-pointer" onClick={toggleHamNav}></i>:
      <i className="fa-solid fa-xmark hover:text-indigo-500 transition delay-200 hover:cursor-pointer" onClick={toggleHamNav}></i>
    }
  </div>


</div>

{hamNavOpen ? null : 
(
<div className="flex flex-col md:hidden justify-center items-center text-center">

{NavMenu()}

  </div>

)}

</>
  )
}

export default Navbar