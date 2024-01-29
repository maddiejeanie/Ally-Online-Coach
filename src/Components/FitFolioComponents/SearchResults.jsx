import { useEffect, useState } from 'react';
import PreviewCard from "./PreviewCard";
import LoadingSpinner from "./LoadingSpinner";

const SearchResults = () => {
   
    const [Loading, setLoading] = useState(false);

    const [exercise, setExercise] = useState([
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://images.unsplash.com/photo-1623200216581-969d9479cf7d?q=80&w=470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "id": "0001",
          "name": "3/4 sit-up",
          "target": "abs",
          "secondaryMuscles": [
            "hip flexors",
            "lower back"
          ],
          "instructions": [
            "Lie flat on your back with your knees bent and feet flat on the ground.",
            "Place your hands behind your head with your elbows pointing outwards.",
            "Engaging your abs, slowly lift your upper body off the ground, curling forward until your torso is at a 45-degree angle.",
            "Pause for a moment at the top, then slowly lower your upper body back down to the starting position.",
            "Repeat for the desired number of repetitions."
          ]
        }]
      );

      function handleLoadMore(){
        setLoading(true);
      }

    return (
        <>
                    <PreviewCard exercise={exercise} length={6}/>

                    {   
                    Loading ? (<LoadingSpinner/>) : 
                    <button className="w-1/2 px-4 py-2 my-8 bg-rose-500 text-white rounded-md hover:bg-rose-600 transition duration-300"
                    onClick={handleLoadMore}>
                    Load More
                  </button>
}
    </>
            )
}

export default SearchResults