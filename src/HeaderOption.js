import React from 'react'
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './HeaderOption.css'

function HeaderOption({ avatar, Icon, titles, onClick, title }) {

    const user = useSelector(selectUser);

    return (
        <div onClick={onClick} className='headerOption' title={title} >
            {Icon && <Icon className='headerOption__icon' />}
            {avatar && <Avatar src={user?.profileUrl} className='headerOption__icon'>{user?.displayName[0]}</Avatar>}
            <h3 className='headerOption__title'>{titles}</h3>
        </div>
    )
}

export default HeaderOption