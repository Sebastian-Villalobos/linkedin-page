import React from 'react';
import './Post.css';
import { Avatar } from '@mui/material';
import InputOption from './InputOption';
import { ThumbUpAltOutlined, ChatOutlined, ShareOutlined, SendOutlined } from '@mui/icons-material';

const Post = ({ name, description, message, photoUrl }) => {
  return (
    <div className='post'>
        <div className='post__header'>
            <Avatar />
            <div className='post__info'>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        <div className='post__body'>
            <p>{message}</p>
        </div>
        <div className='post__buttons'>
            <InputOption Icon={ThumbUpAltOutlined} title='Recomendar' color='gray' />
            <InputOption Icon={ChatOutlined} title='Comentar' color='gray' />
            <InputOption Icon={ShareOutlined} title='Compartir' color='gray' />
            <InputOption Icon={SendOutlined} title='Enviar' color='gray' />
        </div>
    </div>
  );
}

export default Post;