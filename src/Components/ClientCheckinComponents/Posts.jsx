import { ref, onValue } from 'firebase/database';
import { database } from '../ClientCheckinComponents/firebase';
import { useEffect, useState } from 'react';

const Posts = () => {
  const [usersPosts, setUsersPosts] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const formsRef = ref(database, 'forms');
  
      // Set up a real-time listener
      const unsubscribe = onValue(formsRef, (snapshot) => {
        try {
          const data = snapshot.val();
          if (data) {
            const usersPostsData = Object.values(data);
            console.log('Users posts data:', usersPostsData);
            setUsersPosts(usersPostsData);
          } else {
            console.log('No data available');
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      

      // Optionally, you can clean up the listener when the component unmounts
      return () => {
        console.log('Unsubscribing from real-time listener');
        unsubscribe();
      };
    };

    fetchData(); // Call the fetchData function when the component mounts

  }, []); // The empty dependency array ensures the useEffect runs only once when the component mounts



  return (
    <div>
      {usersPosts.map((formData, index) => (
        <div key={index}>
          {/* Display your form data here */}
          <p>CheckinWeight: {formData.CheckinWeight}</p>
          <p>Comments or Help: {formData.CommentsorHelp}</p>
          <p>Energy Levels: {formData.EnergyLevels}</p>
          <p>Goals: {formData.Goals}</p>
          <p>Gratitude: {formData.Gratitude}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
