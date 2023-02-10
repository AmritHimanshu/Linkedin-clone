import React from 'react'
import JobSidebar from './JobSidebar'
import JobFeed from './JobFeed'
import JobGuidance from './JobGuidance'
import './Jobs.css'

function Jobs() {
    return (
        <div className='jobs'>
            <JobSidebar />
            <JobFeed />
            <JobGuidance />
        </div>
    )
}

export default Jobs