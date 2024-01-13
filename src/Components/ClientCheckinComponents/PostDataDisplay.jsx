import React from 'react';

const PostDataDisplay = ({ postDataList }) => {
  return (
    <div className="text-s flex flex-col justify-center my-4 mx-auto sm:w-1/2">
      {postDataList.map((postData) => (
            <div className="bg-gray-100 p-8 rounded-lg shadow-2xl my-4"
            key={postData.id}>
<h2 className="mt-8 h2 text-3xl justify-center uppercase text-shadow flex text-indigo-700">{new Date(postData.submissionTime).toLocaleDateString('en-US', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
})}</h2>


          <h2 className="mt-8 h2 text-3xl uppercase text-shadow flex text-indigo-500">Body Stats and Sleep</h2>
          <p>Checkin Weight: {postData.CheckinWeight} kg</p>
          <p>Sleep Quality Rating: {postData.SleepQualityRating}</p>
          <p>Hours of Sleep: {postData.HoursOfSleep} hours</p>

          <h2 className="mt-8 h2 text-3xl uppercase text-shadow flex text-indigo-500">Stress and Energy</h2>
          <p>Stress Levels: {postData.StressLevels}</p>
          <p>Training Compliance: {postData.TrainingCompliance}</p>
          <p>Training Intensity: {postData.TrainingIntensity}</p>
          <p>Training Progressions: {postData.TrainingProgressions}</p>

          <h2 className="mt-8 h2 text-3xl uppercase text-shadow flex text-indigo-500">Nutrition and Training</h2>
          <p>Nutrition Compliance: {postData.NutritionCompliance}</p>
          <p>Step Target: {postData.StepTarget} steps</p>
          
          <h2 className="mt-8 h2 text-l uppercase text-shadow flex text-indigo-500">Low Energy Factors</h2>
          {postData.lowEnergyFactors && (
            <ul>
              {Object.entries(postData.lowEnergyFactors).map(([factor, value]) => (
                <li key={factor}>{factor}</li>
              ))}
            </ul>
          )}

          <h2 className="mt-8 h2 text-l uppercase text-shadow flex text-indigo-500">Nutrition Challenges</h2>
          {postData.nutritionChallenges && (
            <ul>
              {Object.entries(postData.nutritionChallenges).map(([challenge, value]) => (
                <li key={challenge}>{challenge}</li>
              ))}
            </ul>
          )}

          <h2 className="mt-8 h2 text-l uppercase text-shadow flex text-indigo-500">Sleep Factors</h2>
          {postData.sleepFactors && (
            <ul>
              {Object.entries(postData.sleepFactors).map(([factor, value]) => (
                <li key={factor}>{factor}</li>
              ))}
            </ul>
          )}

          <h2 className="mt-8 h2 text-l uppercase text-shadow flex text-indigo-500">Stress Factors</h2>
          {postData.stressFactors && (
            <ul>
              {Object.entries(postData.stressFactors).map(([factor, value]) => (
                <li key={factor}>{factor}</li>
              ))}
            </ul>
          )}

          <h2 className="mt-8 h2 text-3xl uppercase text-shadow flex text-indigo-500">Social Interaction, Goals, and Reflection</h2>
          <p>Social Interaction: {postData.SocialInteraction ? 'Yes' : 'No'}</p>
          <p>Gratitude List: {postData.Gratitude}</p>
          <p>Week Rating: {postData.WeekRating}</p>
          <p>Goals: {postData.Goals}</p>
          <p>Comments or Help Needed: {postData.CommentsorHelp}</p>

        </div>
      ))}
    </div>
  );
};

export default PostDataDisplay;
