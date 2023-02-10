import React from 'react'
import JobSidebarOption from './JobSidebarOption';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AssignmentIcon from '@mui/icons-material/Assignment';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import FeedIcon from '@mui/icons-material/Feed';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import SettingsIcon from '@mui/icons-material/Settings';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import './JobSidebar.css'

function JobSidebar() {
  return (

    <div className='jobSidebar'>

      <JobSidebarOption Icon={BookmarkIcon} title='My jobs' />
      <JobSidebarOption Icon={NotificationsIcon} title='Jobs alerts' />
      <JobSidebarOption Icon={AssignmentIcon} title='Skill Assessments' />
      <JobSidebarOption Icon={StickyNote2Icon} title='Interview prep' />
      <JobSidebarOption Icon={FeedIcon} title='Resume Builder' />
      <JobSidebarOption Icon={SmartDisplayIcon} title='Job seeker guidance' />
      <JobSidebarOption Icon={SettingsIcon} title='Application settings' />

      <div className="jobSidebar__bottom">
        <DriveFileRenameOutlineIcon />
        <h4>Post a free job</h4>
      </div>

    </div>

  )
}

export default JobSidebar