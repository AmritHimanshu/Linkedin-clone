import React from 'react'
import { Avatar } from '@mui/material'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import './MyNetworkBodyOption.css'

function MyNetworkBodyOption({ profilePic, name, description, college }) {
    return (
        <div className='myNetworkBodyOption'>
            <div className="myNetworkBodyOption__image">
                <img src="https://media.istockphoto.com/id/1038916878/video/abstract-dashed-line-color-pattern-background.jpg?s=640x640&k=20&c=oi7_ptVDTO73YTZYo4GSqJADDvTKAqzCkmvnewFU_tw=" alt="" />
                <Avatar src={profilePic} style={{ cursor: 'pointer', width: '100px', height: '100px', marginLeft: '42px' }} />
            </div>
            <div className="myNetworkBodyOption__body">
                <h3>{name}</h3>
                <p>{college}</p>
            </div>
            <div className="myNetworkBodyOption__footer">
                <div className="myNetworkBodyOption__footer__section">
                    <PersonAddAltIcon />
                    <h3>Connect</h3>
                </div>
            </div>
        </div>
    )
}

export default MyNetworkBodyOption