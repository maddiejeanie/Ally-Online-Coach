import React, { useState, useEffect } from 'react';
import { getDatabase, ref, get } from 'firebase/database';
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

    const fetchData = async () => {
      try {
        console.log("Fetching data...");
        const snapshot = await get(postsRef);
        const data = snapshot.val();

        if (data) {
          const formIds = Object.keys(data);
          const forms = formIds.map((formId) => ({
            id: formId,
            ...data[formId],
          }));

          const currentUser = auth.currentUser;

          if (currentUser) {
            setUserId(currentUser.uid);

            const filteredForms = forms.filter((form) => form.userId === currentUser.uid);

            setPostDataList(filteredForms);
          } else {
            console.log("No user signed in.");
            setError('No user signed in.');
            setUserId(null);
          }
        } else {
          console.log("No valid form data found");
          setError('No valid form data found');
          setPostDataList([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {postDataList.length > 0 ? (
        <PostDataDisplay postDataList={postDataList} />
      ) : (
        <div className="bg-gradient-to-r from-sky-500 to-sky-700 p-8 rounded-lg shadow-2xl w-full text-s text-white flex flex-col items-center justify-center my-4 mx-auto sm:w-3/4 lg:w-1/2">
          <div className="h1 flex items-center justify-center w-10 h-10 border-0 rounded-full bg-sky-300 text-sky-100 text-xl">
            <i className="fa-solid fa-dumbbell"></i>
          </div>
          <h2 className="m-8 h2 text-3xl uppercase text-shadow flex justify-center text-sky-100 font-bold tracking-wide">
            Client Checkin
          </h2>
          {error && <p className="text-white bg-red-500 p-2">Error: {error}</p>}
          <Link
            to="/clients/posts/new"
            className="w-1/2 text-center px-4 py-2 my-4 border border-sky-500 text-sky-700 bg-sky-100 rounded-lg shadow-lg hover:bg-sky-200 focus:outline-none focus:bg-sky-200"
          >
            Create Check-in
          </Link>
        </div>
      )}
    </div>
  );
};

export default Posts;