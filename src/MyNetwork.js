import React from 'react'
import MyNetworkSidebar from './MyNetworkSidebar'
import MyNetworkBody from './MyNetworkBody'
import './MyNetwork.css'

function MyNetwork() {
    return (
        <div className='myNetwork'>
            <MyNetworkSidebar />
            <MyNetworkBody />
        </div>
    )
}

export default MyNetwork