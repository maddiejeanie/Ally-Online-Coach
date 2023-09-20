import { Link } from "react-router-dom";

import React from 'react'

const Contact = () => {
  return (
    <div>

      <p>It is improtant to me that you recieve everything you need to help you on your journey & toward your success. So please, if there is anything you need, don't hesitate to reach out to me.</p>
      
        <form action="https://getform.io/f/3d45e44f-c964-4deb-8055-0933fa59eb9a" method="POST">
            <input type="text" name="name" />
            <input type="email" name="email" />
            <input type="text" name="message" />
            <input type="hidden" name="_gotcha" style="display:none !important" />
            <button type="submit">Send</button> 
    </form>

    <p>I wanted to take this opportunity to say a big ole Welcome! Thank you for investing your time & income in yourself & into coaching with me. I feel incredibly privileged that you have trusted me. I want to make it clear this isn't just about excercise and the gym; It's about mindset, confidence, honoring yourself and showing up for yourself 100% everyday.</p>
</div>
  )
}

export default Contact