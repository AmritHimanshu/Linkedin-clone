import React from 'react'
import JobFeedOption from './JobFeedOption';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import JobGuidance from './JobGuidance';
import './JobFeed.css'

function JobFeed() {
    return (
        <div className='jobFeed'>
            <div className="jobFeed__top">
                <div className="jobFeed__top__header">
                    <p>Recent job searches</p>
                    <h4>clear</h4>
                </div>
                <div className="jobFeed__top__body">
                    <div className="jobFeed__top__body__job">
                        <h4>web developer</h4>
                        <h5>Bangaluru, Karnataka, India - Part-time Remote Hybrid</h5>
                        <hr />
                    </div>
                    <div className="jobFeed__top__body__job">
                        <h4>web developer</h4>
                        <h5>Bangaluru, Karnataka, India - Part-time Remote Hybrid</h5>
                        <hr />
                    </div>
                    <div className="jobFeed__top__body__job">
                        <h4>web developer</h4>
                        <h5>Bangaluru, Karnataka, India - Part-time Remote Hybrid</h5>
                    </div>
                    <hr />
                    <div className="jobFeed__top__body__show">
                        <span><p>Show more</p><ExpandMoreIcon /></span>
                    </div>
                </div>
            </div>
            <div className="jobFeed__bottom">
                <div className="jobFeed__bottom__header">
                    <h4>Recommended for you</h4>
                    <p>Based on your profile and search history</p>
                </div>
                <div className="jobFeed__bottom__feed">
                    <JobFeedOption image="https://cdn.pixabay.com/photo/2019/10/16/09/09/doraemon-4553920_1280.png" title="Frontend Developer" description="Noir" place="Manchester, England, United Kingdomm (Hybrid)" time="4 hours ago" />
                </div>
                <hr />
                <div className="jobFeed__bottom__feed">
                    <JobFeedOption image="https://static.vecteezy.com/packs/media/vectors/term-bg-1-3d6355ab.jpg" title="Software Engineer, Web Developer, HTML & CSS & JS" description="ReactivePay" place="Novi Sad, Vojvodina, Serbia (Hybrid)" time="3 hours ago" />
                </div>
                <hr />
                <div className="jobFeed__bottom__feed">
                    <JobFeedOption image="https://media.istockphoto.com/id/1297535271/vector/%C3%B0%C3%B0%C2%B5%C3%B1%C3%B0%C3%B1%C3%B1.jpg?s=612x612&w=0&k=20&c=dQRFMUSLrWrKrkJLy5L8Sl_Qt3GyeKwnLYRhxNITAxI=" title="Graduate Frontend Developer" description="Williams Lea" place="United Kingdomm (Remote)" time="4 days ago" />
                </div>
                <hr />
                <div className="showall">
                    <h3>Show all</h3>
                    <ArrowForwardIcon />
                </div>
            </div>

            <div className="jobFeed__bottom">
                <div className="jobFeed__bottom__header">
                    <h4>Similar to a job you applied 12 days ago</h4>
                    <p>Frontend Developer at micro1</p>
                </div>
                <div className="jobFeed__bottom__feed">
                    <JobFeedOption image="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg" title="Web Developer" description="Noir" place="Manchester, England, United Kingdomm (Hybrid)" time="4 hours ago" />
                </div>
                <hr />
                <div className="jobFeed__bottom__feed">
                    <JobFeedOption image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSABLtwYNJGM7HmzYnX6QAakCOAG1i8gAJGIexbnUr6&s" title="Web Development Intern" description="Corizo" place="Novi Sad, Vojvodina, Serbia (Hybrid)" time="3 hours ago" />
                </div>
                <hr />
                <div className="jobFeed__bottom__feed">
                    <JobFeedOption image="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" title="Graduate Frontend Developer" description="Williams Lea" place="United Kingdomm (Remote)" time="4 days ago" />
                </div>
                <hr />
                <div className="showall">
                    <h3>Show all</h3>
                    <ArrowForwardIcon />
                </div>
            </div>
        </div>
    )
}

export default JobFeed