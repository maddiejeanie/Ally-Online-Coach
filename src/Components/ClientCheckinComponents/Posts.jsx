import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import { app } from '../ClientCheckinComponents/firebase';
import PostDataDisplay from './PostDataDisplay';
import { Link } from "react-router-dom"

const database = getDatabase(app);
const auth = getAuth(app);

const Posts = () => {
  const [postDataList, setPostDataList] = useState([]);
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const database = getDatabase();
    const auth = getAuth();
    const postsRef = ref(database, 'forms');

    const fetchData = (snapshot) => {
      try {
        const data = snapshot.val();

        if (data) {
          const formIds = Object.keys(data);
          const forms = formIds.map((formId) => ({
            id: formId,
            ...data[formId],
          }));

          setPostDataList(forms);

          const currentUser = auth.currentUser;
          if (currentUser) {
            const entriesForCurrentUser = forms.filter((form) => form.userId === currentUser.uid);
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

    return () => {
      try {
        postsUnsubscribe();
      } catch (error) {
        console.error('Error cleaning up listener:', error);
      }
    };
  }, []);

  return (
    <div>
      {postDataList.length > 0 ? (
        <><PostDataDisplay postDataList={postDataList} />
       </>

      ) : (
        <><p>No forms found.</p>
                <Link
            type="button"
            to="/clients/posts/new"
            className="w-full px-4 py-2 my-4 border border-indigo-500 text-indigo-700 bg-indigo-100 rounded-lg shadow-lg hover:bg-indigo-200 focus:outline-none focus:bg-indigo-200"
          >
            Create Check-in
          </Link></>
      )}
    </div>
  );
};


export default Posts
