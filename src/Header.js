import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import { auth, db, storage } from './firebase';
import { getDownloadURL, listAll, ref } from 'firebase/storage';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { setPic } from './features/profilePhoto';
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

    const user = useSelector(selectUser);

//--------------- Geting Images from the firebase storage --------------
// ---------------------------------------------------------------------
    const [imageList, setImageList] = useState('');
    const imageListRef = ref(storage, `${user.email}/`);
    useEffect(() => {
        if (!user.profileUrl) {
            listAll(imageListRef).then((res) => {
                res.items.forEach((item) => {
                    getDownloadURL(item).then((url) => {
                        setImageList(url);
                    })
                })
            });
        }
    }, []);

    dispatch(setPic({ profileUrl: imageList }));

// ------------ Navigating to page /job --------------
    const jobs = () => {
        history('/jobs');
    }

//---------- Log Out on clicking on Log out button ------------
// ---------------------------------------------------------- 
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
                <HeaderOption Icon={SupervisorAccountIcon} titles='My Network' onClick={() => { history('/mynetwork') }} />
                <HeaderOption Icon={BusinessCenterIcon} titles='Jobs' onClick={jobs} />
                <HeaderOption Icon={ChatIcon} titles='Messaging' />
                <HeaderOption Icon={NotificationsIcon} titles='Notifications' />
                <HeaderOption avatar={true} titles='Log Out' onClick={logoutOfApp} title='log out' />
            </div>
        </div>
    )
}

export default Header