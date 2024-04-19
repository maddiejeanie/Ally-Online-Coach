import React from 'react';
import { Link } from 'react-router-dom'
import SubSiteHeader from '../WebsiteComponents/SubSiteHeader';
const PostDataDisplay = ({ postDataList }) => {


  return (
<div className="bg-gradient-to-r from-sky-500 to-sky-700 p-8 shadow-2xl w-full text-s text-black flex flex-1 flex-col items-center justify-center sm:my-4 sm:rounded-lg mx-auto sm:w-3/4 lg:w-1/2">
    <SubSiteHeader name={location.pathname}/>
  {postDataList.map((postData) => (
        
        <div className="w-full my-4 bg-sky-100 p-4 rounded-lg shadow-2xl" key={postData.submissionTime}>
          <p className="mt-4 text-2xl uppercase font-semibold tracking-wide text-sky-700">
            {new Date(postData.submissionTime).toLocaleDateString('en-US', {
              weekday: 'long',
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}

          </p>

          <p className="leading-loose text-xl uppercase text-shadow text-sky-500 font-semibold tracking-wide">
            <strong>Body Stats and Sleep</strong>
          </p>
          <p><strong>Checkin Weight:</strong> {postData.CheckinWeight} kg</p>
          <p><strong>Sleep Quality Rating:</strong> {postData.SleepQualityRating}</p>
          <p><strong>Hours of Sleep:</strong> {postData.HoursOfSleep} hours</p>

          <p className="mt-4 leading-loose text-xl uppercase text-shadow text-sky-500 font-semibold tracking-wide">
            <strong>Stress and Energy</strong>
          </p>
          <p><strong>Stress Levels:</strong> {postData.StressLevels}</p>
          <p><strong>Training Compliance:</strong> {postData.TrainingCompliance}</p>
          <p><strong>Training Intensity:</strong> {postData.TrainingIntensity}</p>
          <p><strong>Training Progressions:</strong> {postData.TrainingProgressions}</p>

          <p className="mt-4 leading-loose text-xl uppercase text-shadow text-sky-500 font-semibold tracking-wide">
            <strong>Nutrition and Training</strong>
          </p>
          <p><strong>Nutrition Compliance:</strong> {postData.NutritionCompliance}</p>
          <p><strong>Step Target:</strong> {postData.StepTarget} steps</p>

          <p className="mt-4 leading-loose text-xl uppercase text-shadow text-sky-500 font-semibold tracking-wide">
            <strong>Low Energy Factors</strong>
          </p>
          {postData.lowEnergyFactors && (
            <ul>
              {Object.entries(postData.lowEnergyFactors).map(([factor, value]) => (
                <li key={factor}>{factor}</li>
              ))}
            </ul>
          )}

<p className="mt-4 leading-loose text-xl uppercase text-shadow text-sky-500 font-semibold tracking-wide">
            <strong>Nutrition Challenges</strong>
          </p>
          {postData.nutritionChallenges && (
            <ul>
              {Object.entries(postData.nutritionChallenges).map(([challenge, value]) => (
                <li key={challenge}>{challenge}</li>
              ))}
            </ul>
          )}

<p className="mt-4 leading-loose text-xl uppercase text-shadow text-sky-500 font-semibold tracking-wide">
            <strong>Sleep Factors</strong>
          </p>
          {postData.sleepFactors && (
            <ul>
              {Object.entries(postData.sleepFactors).map(([factor, value]) => (
                <li key={factor}>{factor}</li>
              ))}
            </ul>
          )}

<p className="mt-4 leading-loose text-xl uppercase text-shadow text-sky-500 font-semibold tracking-wide">
            <strong>Stress Factors</strong>
          </p>
          {postData.stressFactors && (
            <ul>
              {Object.entries(postData.stressFactors).map(([factor, value]) => (
                <li key={factor}>{factor}</li>
              ))}
            </ul>
          )}

<p className="mt-4 leading-loose text-xl uppercase text-shadow text-sky-500 font-semibold tracking-wide">
            <strong>Social Interaction, Goals, and Reflection</strong>
          </p>
          <p><strong>Social Interaction:</strong> {postData.SocialInteraction ? 'Yes' : 'No'}</p>
          <p><strong>Gratitude List:</strong> {postData.Gratitude}</p>
          <p><strong>Week Rating:</strong> {postData.WeekRating}</p>
          <p><strong>Goals:</strong> {postData.Goals}</p>
          <p><strong>Comments or Help Needed:</strong> {postData.CommentsorHelp}</p>

        </div>
      ))}
  <div className="flex flex-row gap-4 items-center w-full justify-center">
    <Link
      to="/clientcheckin"
      className="w-1/2 my-2 text-center px-4 py-2 rounded-lg bg-sky-100 text-sky-700 transition-colors duration-300 hover:bg-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-400"
    >
      &lt; Back to Dashboard
    </Link>

    <Link
      to="/clientcheckin/posts/new"
      className=" w-1/2 my-2 text-center px-4 py-2 rounded-lg bg-sky-100 text-sky-700 transition-colors duration-300 hover:bg-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-400"
    >
      Create Check-in &gt; 
    </Link>
  </div>

    </div>
    
  );
};

export default PostDataDisplay;
