import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './JobGuidance.css'

function JobGuidance() {
    return (
        <div className='jobGuidance'>
            <div className="jobGuidance__header">
                <h4>Job seeker guidance</h4>
                <p>Recommended based on your activity</p>
            </div>
            <div className="jobGuidance__middle">
                <h4>I want to improve my resume</h4>
            </div>
            <div className="jobGuidance__footer">
                <p>Explore out curated guide of expert-led courses, such as how to improve your resume and grow your network, to help you land your next opportunity.</p>
                <span>
                    <p>Show more</p>
                    <ArrowForwardIcon />
                </span>
            </div>
        </div>
    )
}

export default JobGuidance