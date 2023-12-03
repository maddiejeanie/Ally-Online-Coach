import React from 'react'
import { Link } from "react-router-dom";

export const ContactCTA = () => {
  return (
    <div className="p-8 bg-gradient-to-r from-indigo-400 via-purple-500 to-blue-300 flex flex-col text-center text-white">
      <h1 className="h1 text-3xl font-white uppercase animate-bounce">READY TO TAKE THE FIRST STEP?</h1>
      <p className="p2">Fill out the form and get started on the path to a mentally and physically stronger you.</p>
      <Link to="contact"><button className="h1 m-4 px-3 py-2 font-bold uppercase text-white border rounded-lg hover:text-indigo-50 hover:bg-indigo-400">Let's Get Started</button></Link>
    </div>
  )
}
export default ContactCTA