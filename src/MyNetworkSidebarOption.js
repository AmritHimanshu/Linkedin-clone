import React from 'react'
import './MyNetworkSidebarOption.css'

function MyNetworkSidebarOption({ Icon, title, number }) {
    return (
        <div className='myNetworkSidebarOption'>
            <Icon />
            <p>{title}</p>
            <span>{number}</span>
        </div>
    )
}

export default MyNetworkSidebarOption