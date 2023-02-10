import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice';
import { auth } from './firebase';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HeaderOption from './HeaderOption';
import './Header.css'

function Header() {

    const history = useNavigate();
    const dispatch = useDispatch();

    const jobs = () => {
        history('/jobs');
    }

    const logoutOfApp = () => {
        dispatch(logout())
        history('/');
        auth.signOut();
    };

    return (
        <div className='header'>

            <div className="header__left">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />
                <div className="header__search">
                    <SearchIcon />
                    <input type="text" placeholder='search' />
                </div>
            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} titles='Home' onClick={() => { history('/') }} />
                <HeaderOption Icon={SupervisorAccountIcon} titles='My Network' onClick={() => history('/mynetwork')} />
                <HeaderOption Icon={BusinessCenterIcon} titles='Jobs' onClick={jobs} />
                <HeaderOption Icon={ChatIcon} titles='Messaging' />
                <HeaderOption Icon={NotificationsIcon} titles='Notifications' />
                <HeaderOption avatar={true} titles='Me' onClick={logoutOfApp} title='log out' />
            </div>

        </div>
    )
}

export default Header