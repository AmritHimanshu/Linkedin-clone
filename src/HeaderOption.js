import React from 'react'
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { selectProfilePhoto } from './features/profilePhoto';
import './HeaderOption.css'

function HeaderOption({ avatar, Icon, titles, onClick, title }) {

    const user = useSelector(selectUser);
    const profilePhoto = useSelector(selectProfilePhoto);

    return (
        <div onClick={onClick} className='headerOption' title={title} >
            {Icon && <Icon className='headerOption__icon' />}
            {avatar && <Avatar src={profilePhoto.profileUrl == '' ? user?.profileUrl : profilePhoto?.profileUrl} className='headerOption__icon'>{user?.displayName[0]}</Avatar>}
            <h3 className='headerOption__title'>{titles}</h3>
        </div>
    )
}

export default HeaderOption