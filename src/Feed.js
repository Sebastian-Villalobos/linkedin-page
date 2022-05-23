import React, { useState, useEffect } from 'react';
import './Feed.css';
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import InputOption from './InputOption';
import Post from './Post';
import firebase from 'firebase/compat/app';
import { db } from './firebase';

const Feed = () => {
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').onSnapshot((snapshot) => 
      setPosts(snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection('posts').add({
      name: 'Sebastián Villalobos',
      description: 'Esta es una prueba',
      message: input,
      photoUrl: '',
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  return (
    <div className='feed'>
        <div className='feed__inputContainer'>
            <div className='feed__input'>
                <CreateIcon />
                <form>
                    <input value={input} onChange={(e) => setInput(e.target.value)} type='text' />
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
        
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post 
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
    </div>
  );
}

export default Feed;