import { getDocs, collection } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const Posts = () => {


    const querySnapshot =  getDocs(collection(db, "forms"))
    
    querySnapshot.map((post) => {
    if (post.userId = getAuth().currentUser.uid){
        console.log(post.data())
    }})



    return (
        <div>
        <p>here are your posts:</p>
        <p>entry1</p>
        <p>entry2</p>
        </div>
    )
}

export default Posts