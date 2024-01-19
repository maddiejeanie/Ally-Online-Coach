import React, { useState, useEffect } from 'react';
import { getDatabase, ref } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import PostDataDisplay from './PostDataDisplay';
import { Link } from 'react-router-dom';

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


          const currentUser = auth.currentUser;
          if (currentUser) {
            // Set the current user ID
            setUserId(currentUser.uid);

            setPostDataList(forms.filter((form) => form.userId === currentUser.uid));

          } else {
            setError('No user signed in.');
            setUserId(null);
          }
        } else {
          setError('No valid form data found');
          setPostDataList([]);
        }
      } catch (error) {
        setError(error.message);
      }
    };


    return () => {
      try {
        postsUnsubscribe();
      } catch (error) {
        setError('Error cleaning up listener:', error);
      }
    };
  }, []);

  return (
    <div>
      {postDataList.length > 0 ? (
        <>
          <PostDataDisplay postDataList={postDataList} />
        </>
      ) : (
        <>
            <div className="bg-gray-100 p-8 rounded-lg shadow-2xl w-full text-s flex flex-col items-center justify-center my-4 mx-auto sm:w-1/2">

          <p>{error}</p>
          <Link
            type="button"
            to="/clients/posts/new"
            className="w-1/2 text-center px-4 py-2 my-4 border border-sky-500 text-sky-700 bg-sky-100 rounded-lg shadow-lg hover:bg-sky-200 focus:outline-none focus:bg-sky-200"
          >
            Create Check-in
          </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Posts;
