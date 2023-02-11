import React, { forwardRef, useState } from 'react'
import { Avatar } from '@mui/material'
import InputOption from './InputOption'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined'
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'
import './Post.css'

const Post = forwardRef(({ data }, ref) => {

    const [active, setActive] = useState('');

    const changeStyle = () => {
        if (active === '')
            setActive('#087dea');
        else
            setActive('');
    }

    return (
        <div ref={ref} className='post'>
            <div className="post__header">
                <Avatar src={data.photoUrl}>{data.name?.[0]}</Avatar>
                <div className="post__info">
                    <h2>{data.name}</h2>
                    <p>{data.description}</p>
                </div>
            </div>
            <div className="post__body">
                <h4>{data.message}</h4>
            </div>

            <div className="post__buttons">
                <InputOption Icon={active === '' ? (ThumbUpAltOutlinedIcon) : (ThumbUpIcon)} title='like' color={active !== '' ? `${active}` : `gray`} onClick={changeStyle} />
                <InputOption Icon={ChatOutlinedIcon} title='comment' color='gray' />
                <InputOption Icon={ShareOutlinedIcon} title='share' color='gray' />
                <InputOption Icon={SendOutlinedIcon} title='send' color='gray' />
            </div>
        </div>
    )
})

export default Post