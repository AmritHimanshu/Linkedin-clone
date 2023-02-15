import React from 'react'
import firebase from 'firebase/compat/app';
import { auth, db } from './firebase';
import { updateProfile } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { login, selectUser } from './features/userSlice';
import { removePic, selectProfilePhoto } from './features/profilePhoto';
import { Avatar } from '@mui/material'
import './HeaderOption.css'

function HeaderOption({ avatar, Icon, titles, onClick, title }) {

    const user = useSelector(selectUser);
    const profilePhoto = useSelector(selectProfilePhoto);
    const dispatch = useDispatch();

//------- Updating profile pic of current logged in user ----------------
// ----------------------------------------------------------------------
    if (!auth.currentUser.photoURL) {
        updateProfile(auth.currentUser, {
            photoURL: profilePhoto?.profileUrl,
        }).then(() => {
            dispatch(removePic());
        }).catch((error) => alert(error));
    }

    return (
        <div onClick={onClick} className='headerOption' title={title} >
            {Icon && <Icon className='headerOption__icon' />}

            {avatar && <Avatar src={auth.currentUser.photoURL} className='headerOption__icon'>{user?.displayName[0]}</Avatar>}
            
            <h3 className='headerOption__title'>{titles}</h3>
        </div>
    )
}

export default HeaderOption