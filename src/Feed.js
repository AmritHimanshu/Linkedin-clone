import React, { useEffect, useState } from 'react'
import { auth, db } from './firebase'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import firebase from 'firebase/compat/app';
import Post from './Post'
import PostPicInput from './PostPicInput';
import InputOption from './InputOption'
import CreateIcon from '@mui/icons-material/Create'
import ImageIcon from '@mui/icons-material/Image'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions'
import EventNoteIcon from '@mui/icons-material/EventNote'
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay'
import FlipMove from 'react-flip-move'
import './Feed.css'

function Feed() {

    const user = useSelector(selectUser);

    const [input, setInput] = useState('');
    const [photo, setPhoto] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").orderBy('timestamp', 'desc').onSnapshot((snapshot) =>
            setPosts(snapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    data: doc.data(),
                }
            ))
            ))
    }, []);


    const sendPost = (e) => {
        e.preventDefault();
        // setPosts(['', ...posts])  //Firebase is used instead of this
        db.collection('posts').add({
            name: user.displayName,
            description: 'This is a test',
            message: input,
            photoUrl: auth.currentUser.photoURL || "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        setInput('');
    };

    return (
        <div className='feed'>
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder='Share a post' />
                        <button type='submit' onClick={sendPost}>Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">

                    <InputOption value={photo} Icon={ImageIcon} title='Photos' color='#7085F9' onChange={e => setPhoto(e.target.value)} onClick={<PostPicInput photo={photo} setPhoto={setPhoto} />} />
                    <InputOption Icon={SubscriptionsIcon} title='Videos' color='#E7A33E' />
                    <InputOption Icon={EventNoteIcon} title='Event' color='#C0CBCD' />
                    <InputOption Icon={CalendarViewDayIcon} title='Write article' color='#7PC15E' />

                </div>
            </div>

            <FlipMove>
                {posts && posts.map((data) => (
                    <Post
                        key={data.id} data={data.data}
                    />
                ))}
            </FlipMove>

        </div>
    )
}

export default Feed