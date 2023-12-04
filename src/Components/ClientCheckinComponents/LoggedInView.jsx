import React from "react"
import { useState } from "react"

const LoggedInView = () => {

    const [checkinsExist, setCheckinsExist] = useState(false)

    return (
<div className="bg-gray-100 p-8 rounded-lg shadow-2xl w-2/3 flex flex-col items-center justify-center">
<div className="h1 flex items-center justify-center w-10 h-10 p-2 border-0 rounded-full bg-indigo-500 text-white text-xl">
    <i className="fa-solid fa-dumbbell"></i>
  </div>
<h2 className="mt-8 h2 text-3xl uppercase text-shadow text-center text-indigo-500">
            Hello, $name
        </h2>
        <div className="text-s flex flex-col items-center justify-center my-4 mx-auto sm:w-1/2">
        
        
                { checkinsExist ? <button
                className="my-2 w-full px-4 py-2 border border-white text-white bg-indigo-500 rounded-lg shadow-lg hover:bg-indigo-400 focus:outline-none focus:bg-indigo-400"
            >
                View Check-ins
            </button> : <p>Hmm, no check-ins yet. Create one below!</p>
            }

            <button
                type="button"
                className="w-full px-4 py-2 border border-indigo-500  text-indigo-700 bg-indigo-100 rounded-lg shadow-lg hover:bg-indigo-200 focus:outline-none focus:bg-indigo-200"
            >
                Create Check-in
            </button>
        </div>
        </div>
    )
}

export default LoggedInView