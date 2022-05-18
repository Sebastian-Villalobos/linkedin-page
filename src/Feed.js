import React, { useState } from 'react';
import './Feed.css';
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import InputOption from './InputOption';
import Post from './Post';
import { db } from './firebase';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => (
      setPosts(snapshot.docs.map(doc => (
        
      )))
    ))
  }, [])

  const sendPost = e => {
    e.preventDefault();
  };

  return (
    <div className='feed'>
        <div className='feed__inputContainer'>
            <div className='feed__input'>
                <CreateIcon />
                <form>
                    <input type='text' />
                    <button onClick={sendPost} type='submit'>Publicar</button>
                </form>
            </div>
            <div className='feed__inputOptions'>
              <InputOption Icon={ImageIcon} title='Foto' color='#70B5F9' />
              <InputOption Icon={SubscriptionsIcon} title='Video' color='#7FC15E' />
              <InputOption Icon={EventNoteIcon} title='Evento' color='#E7A33E' />
              <InputOption Icon={CalendarViewDayIcon} title='Escribir Artículo' color='#F48498' />
            </div>
        </div>
        {posts.map((post) => (
          <Post />
        ))}
        <Post name='Sebastián Villalobos' description='Prueba' message='Funciona' />
    </div>
  );
}

export default Feed