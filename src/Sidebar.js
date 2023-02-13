import React from 'react'
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice';
import { selectProfilePhoto } from './features/profilePhoto';
import SearchIcon from '@mui/icons-material/Search';
import './Sidebar.css'

function Sidebar() {

    const user = useSelector(selectUser);
    const profilePhoto = useSelector(selectProfilePhoto);


    // var recent = ["reactjs", "programming", "development", "software design", "gaming"];
    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )


    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1557682260-96773eb01377?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1129&q=80" alt="" />
                <Avatar src={profilePhoto?.profileUrl} className='sidebar__avatar' >{user.displayName[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who's viewed you</p>
                    <p className="sidebar__statNumber">2,545</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">2,356</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {/* {recent?.map(rec => (
                    <div>{rec}</div>
                ))} */}
                {recentItem("reactjs")}
                {recentItem("software design")}
                {recentItem("programming")}
                {recentItem("development")}
                {recentItem("gaming")}
            </div>
        </div>
    )
}

export default Sidebar