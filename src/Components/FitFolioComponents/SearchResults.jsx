import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import PreviewCard from "./PreviewCard";
import LoadingSpinner from "./LoadingSpinner";

const SearchResults = () => {
   
    const { slug } = useParams();
    const location = useLocation();

    const [Loading, setLoading] = useState(false);
    const [LengthWanted, setLengthWanted] = useState(6)

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
        },
        {
            "bodyPart": "upper arms",
            "equipment": "cable",
            "gifUrl": "https://v2.exercisedb.io/image/jEr1xnvrjcoEak",
            "id": "0200",
            "name": "cable pushdown (with rope attachment)",
            "target": "triceps",
            "secondaryMuscles": [
              "forearms"
            ],
            "instructions": [
              "Attach a rope attachment to a high pulley on a cable machine.",
              "Stand facing the machine with your feet shoulder-width apart and a slight bend in your knees.",
              "Grasp the rope with an overhand grip, palms facing each other.",
              "Keep your elbows close to your sides and your upper arms stationary throughout the exercise.",
              "Exhale and push the rope downward by extending your elbows until your arms are fully extended.",
              "Pause for a moment, then inhale and slowly return to the starting position by allowing your elbows to flex.",
              "Repeat for the desired number of repetitions."
            ]
          }
    ]
      );

      function handleLoadMore() {
        setLoading(true);
        setTimeout(() => {
          setLengthWanted(12);
          setLoading(false);
        }, 4000);
      }
      
      return (
        <>
            <div className="bg-gray-100 p-8 rounded-lg shadow-2xl w-full text-s flex flex-col items-center justify-center my-4 mx-auto sm:w-1/2">
          {Loading ? (
            <LoadingSpinner />
          ) : ( 
            <button
              className="w-1/2 px-4 py-2 my-8 bg-rose-500 text-white rounded-md hover:bg-rose-600 transition duration-300"
              onClick={handleLoadMore}
            >
              Load More TESSSSST
            </button>
          )}
        </div>
        </>
      );
      
}

export default SearchResults