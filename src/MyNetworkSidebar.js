import React from 'react'
import MyNetworkSidebarOption from './MyNetworkSidebarOption'
import PeopleIcon from '@mui/icons-material/People';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import EventIcon from '@mui/icons-material/Event';
import ArticleIcon from '@mui/icons-material/Article';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import TagIcon from '@mui/icons-material/Tag';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import './MyNetworkSidebar.css'

function MyNetworkSidebar() {
    return (
        <div className='myNetworkSidebar'>
            <div className="myNetworkSidebar__header">
                <p>Manage my network</p>
            </div>
            <MyNetworkSidebarOption Icon={PeopleIcon} title="Connections" number="80" />
            <MyNetworkSidebarOption Icon={PermContactCalendarIcon} title="Contacts" />
            <MyNetworkSidebarOption Icon={PersonIcon} title="Following & followers" />
            <MyNetworkSidebarOption Icon={GroupsIcon} title="Groups" />
            <MyNetworkSidebarOption Icon={EventIcon} title="Events" />
            <MyNetworkSidebarOption Icon={ArticleIcon} title="Pages" number="36" />
            <MyNetworkSidebarOption Icon={NewspaperIcon} title="Newsletters" />
            <MyNetworkSidebarOption Icon={TagIcon} title="Hashtags" />

            <div className='myNetworkSidebar__showless'>
                <h3>Show less</h3>
                <KeyboardArrowUpIcon />
            </div>
        </div>
    )
}

export default MyNetworkSidebar