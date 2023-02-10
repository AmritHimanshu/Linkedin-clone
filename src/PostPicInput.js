import React from 'react'
import './PostPicInput.css'

function PostPicInput(photo, setPhoto) {
    return (
        <div className='postPic'>
            <input value={photo} type="text" onChange={setPhoto} />
        </div>
    )
}

export default PostPicInput