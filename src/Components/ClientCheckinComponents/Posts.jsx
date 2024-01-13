import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import { app } from '../ClientCheckinComponents/firebase';
import PostDataDisplay from './PostDataDisplay';

const database = getDatabase(app);
const auth = getAuth(app);

const Posts = () => {
  const [postDataList, setPostDataList] = useState([]);
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const postsRef = ref(database, 'forms');

    const fetchData = (snapshot) => {
      try {
        const data = snapshot.val();
        console.log('Fetched data:', data);

        if (data) {
          const formIds = Object.keys(data);
          const forms = formIds.map((formId) => ({
            id: formId,
            ...data[formId],
          }));

          setPostDataList(forms);
          
          // Log the current user's ID once when the component mounts
          const currentUser = auth.currentUser;
          if (currentUser) {
            const currentUserId = currentUser.uid;
            console.log('Current User ID:', currentUserId);
            setUserId(currentUserId);
            
            // Check if userId matches any entry in the fetched data
            const entriesForCurrentUser = forms.filter((form) => form.userId === currentUserId);
            console.log('Entries for current user:', entriesForCurrentUser);
          } else {
            console.log('No user signed in.');
            setUserId(null);
          }
        } else {
          console.log('No valid form data found');
          setPostDataList([]);
        }
      } catch (error) {
        setError(error.message);
        console.error('Error fetching data:', error);
      }
    };

    const postsUnsubscribe = onValue(postsRef, fetchData, (error) => {
      setError(error.message);
      console.error('Error in database listener:', error);
    });

    // Cleanup the listener when the component unmounts
    return () => {
      try {
        postsUnsubscribe();
      } catch (error) {
        console.error('Error cleaning up listener:', error);
      }
    };
  }, [database, auth]);

  return (
    <div>
      {postDataList.length > 0 ? (
        <PostDataDisplay postDataList={postDataList} />
      ) : (
        <p>No forms found.</p>
      )}
    </div>
  );
};

export default Posts;
