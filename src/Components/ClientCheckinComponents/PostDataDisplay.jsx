import React from 'react';
import { Link } from 'react-router-dom'

const PostDataDisplay = ({ postDataList }) => {
  return (
    <div className="text-s flex flex-col justify-center my-4 mx-auto sm:w-1/2">
      {postDataList.map((postData) => (
        <div className="bg-gray-100 p-8 rounded-lg shadow-2xl my-4" key={postData.id}>
          <h2 className="mt-8 h2 text-3xl justify-center uppercase text-shadow flex text-indigo-700">
            {new Date(postData.submissionTime).toLocaleDateString('en-US', {
              weekday: 'long',
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}

          </h2>

          <h2 className="mt-8 h2 text-3xl uppercase text-shadow flex text-indigo-500">
            <strong>Body Stats and Sleep</strong>
          </h2>
          <p><strong>Checkin Weight:</strong> {postData.CheckinWeight} kg</p>
          <p><strong>Sleep Quality Rating:</strong> {postData.SleepQualityRating}</p>
          <p><strong>Hours of Sleep:</strong> {postData.HoursOfSleep} hours</p>

          <h2 className="mt-8 h2 text-3xl uppercase text-shadow flex text-indigo-500">
            <strong>Stress and Energy</strong>
          </h2>
          <p><strong>Stress Levels:</strong> {postData.StressLevels}</p>
          <p><strong>Training Compliance:</strong> {postData.TrainingCompliance}</p>
          <p><strong>Training Intensity:</strong> {postData.TrainingIntensity}</p>
          <p><strong>Training Progressions:</strong> {postData.TrainingProgressions}</p>

          <h2 className="mt-8 h2 text-3xl uppercase text-shadow flex text-indigo-500">
            <strong>Nutrition and Training</strong>
          </h2>
          <p><strong>Nutrition Compliance:</strong> {postData.NutritionCompliance}</p>
          <p><strong>Step Target:</strong> {postData.StepTarget} steps</p>

          <h2 className="mt-8 h2 text-l uppercase text-shadow flex text-indigo-500">
            <strong>Low Energy Factors</strong>
          </h2>
          {postData.lowEnergyFactors && (
            <ul>
              {Object.entries(postData.lowEnergyFactors).map(([factor, value]) => (
                <li key={factor}>{factor}</li>
              ))}
            </ul>
          )}

          <h2 className="mt-8 h2 text-l uppercase text-shadow flex text-indigo-500">
            <strong>Nutrition Challenges</strong>
          </h2>
          {postData.nutritionChallenges && (
            <ul>
              {Object.entries(postData.nutritionChallenges).map(([challenge, value]) => (
                <li key={challenge}>{challenge}</li>
              ))}
            </ul>
          )}

          <h2 className="mt-8 h2 text-l uppercase text-shadow flex text-indigo-500">
            <strong>Sleep Factors</strong>
          </h2>
          {postData.sleepFactors && (
            <ul>
              {Object.entries(postData.sleepFactors).map(([factor, value]) => (
                <li key={factor}>{factor}</li>
              ))}
            </ul>
          )}

          <h2 className="mt-8 h2 text-l uppercase text-shadow flex text-indigo-500">
            <strong>Stress Factors</strong>
          </h2>
          {postData.stressFactors && (
            <ul>
              {Object.entries(postData.stressFactors).map(([factor, value]) => (
                <li key={factor}>{factor}</li>
              ))}
            </ul>
          )}

          <h2 className="mt-8 h2 text-3xl uppercase text-shadow flex text-indigo-500">
            <strong>Social Interaction, Goals, and Reflection</strong>
          </h2>
          <p><strong>Social Interaction:</strong> {postData.SocialInteraction ? 'Yes' : 'No'}</p>
          <p><strong>Gratitude List:</strong> {postData.Gratitude}</p>
          <p><strong>Week Rating:</strong> {postData.WeekRating}</p>
          <p><strong>Goals:</strong> {postData.Goals}</p>
          <p><strong>Comments or Help Needed:</strong> {postData.CommentsorHelp}</p>

        </div>
      ))}
        <div className="bg-gray-100 p-8 rounded-lg shadow-2xl my-8">
  <div className="flex flex-col items-center space-y-6">
    <Link
      to="/clients/posts"
      className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 px-4 py-3 border border-indigo-500 text-indigo-700 bg-indigo-100 rounded-lg shadow-lg hover:bg-indigo-200 focus:outline-none focus:bg-indigo-200 transition duration-300 ease-in-out text-center"
    >
      View Check-ins
    </Link>

    <Link
      to="/clients/posts/new"
      className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 px-4 py-3 border border-indigo-500 text-indigo-700 bg-indigo-100 rounded-lg shadow-lg hover:bg-indigo-200 focus:outline-none focus:bg-indigo-200 transition duration-300 ease-in-out text-center"
    >
      Create Check-in
    </Link>
  </div>
</div>

    </div>
    
  );
};

export default PostDataDisplay;
