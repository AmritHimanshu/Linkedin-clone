import React, { useState } from 'react'
import { IconButton } from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import './JobFeedOption.css'

function JobFeedOption({ image, title, description, place, time }) {

    const [style, setStyle] = useState('');

    const changeStyle = () => {
        if (style == '')
            setStyle('setBookmark');
        else
            setStyle('');
    }

    return (
        <div className='jobFeedOption'>
            <div className="jobFeedOption__image">
                <img src={image} alt="" />
            </div>
            <div className="jobFeedOption__body">
                <h4>{title}</h4>
                <p className='description'>{description}</p>
                <p className='place'>{place}</p>
                <p className='time'>{time}</p>
            </div>
            <div className="icon">
                <IconButton className='visibilityIcon'>
                    <VisibilityOffIcon />
                </IconButton>
                <IconButton onClick={changeStyle}>
                    {style != '' ? (
                        <BookmarkIcon className={style} />
                    ) : (
                        <BookmarkBorderIcon />
                    )}
                </IconButton>
            </div>
        </div>
    )
}

export default JobFeedOption