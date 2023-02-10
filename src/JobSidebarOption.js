import React from 'react'
import './JobSidebarOption.css'

function JobSidebarOption({ Icon, title }) {
    return (
        <div className='jobSidebarOption'>
            <Icon />
            {title}
        </div>
    )
}

export default JobSidebarOption