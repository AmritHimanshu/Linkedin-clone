import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import firebase from 'firebase/compat/app';
import { auth, db, storage } from './firebase';
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';
import { login } from './features/userSlice';
import './Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const [imageUpload, setImageUpload] = useState(null);

    const history = useNavigate();
    const dispatch = useDispatch();

    // const handleChange = (e) => {
    //     // console.log(e.target.files);
    //     setImageUpload(URL.createObjectURL(e.target.files[0]));
    // }

    useEffect(() => {
        history('/');
    }, [])


    const loginToApp = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(userAuth => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    profileUrl: userAuth.user.photoURL,
                })
                );
            }).catch(error => alert(error));
    };


    const register = async () => {
    
        if (!name) {
            return alert("Please enter your name");
        }
        if (!email) {
            return alert("Please enter your email");
        }
        if (!password) {
            return alert("Please enter your password");
        }

        if (imageUpload == null) return;
        const imageRef = ref(storage, `${email}/${imageUpload.name + v4()}`);

        
        // Uploading file to firebase
        uploadBytes(imageRef, imageUpload).then(() => {
            // alert("Image uploaded");
        });

        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: profilePic,
                }).then(() => {
                    dispatch(
                        login({
                            email: userAuth.user.email,
                            uid: userAuth.user.uid,
                            displayName: name,
                            photoURL: profilePic,
                        })
                    );
                });
            }).catch(error => alert(error));

        db.collection('users').add({
            email: email,
            displayName: name,
            photoURL: profilePic,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })

    };


    return (
        <div className='login'>
            <img src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks" alt="" />


            <form>
                <input value={name} onChange={e => setName(e.target.value)} placeholder='Full Name (required if registering)' type="text" />

                <input value='' onChange={e => setProfilePic(e.target.value)} placeholder='Select file for Profile pic' type="text" />

                <input type="file" onChange={e => setImageUpload(e.target.files[0])} />

                <input value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' type="email" />

                <input value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' type="password" />


                <button type='submit' onClick={loginToApp}>Sign In</button>
            </form>

            <p>Not a member?{" "}
                <span className='login__register' onClick={register}>Register Now</span>
            </p>
        </div>
    )
}

export default Login