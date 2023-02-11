import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import firebase from 'firebase/compat/app';
import { auth, db } from './firebase';
import { login } from './features/userSlice';
import './Login.css'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const [picFile, setPicFile] = useState([]);

    const dispatch = useDispatch();


    const loginToApp = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(userAuth => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                })
                );
            }).catch(error => alert(error));
    };

    const register = () => {
        if (!name) {
            return alert("Please enter your name");
        }
        if (!email) {
            return alert("Please enter your email");
        }
        if (!password) {
            return alert("Please enter your password");
        }
        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: profilePic,
                    photo: picFile,
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

                <input value={profilePic} onChange={e => setProfilePic(e.target.value)} placeholder='Profile pic URL (optional) or select file' type="text" />

                {/* <input type="file" value={picFile} onChange={e => setPicFile(e.target.value)} /> */}

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