import React, { useEffect, useState } from 'react';
import { fireBase } from '../firebase';
import { useParams } from 'react-router-dom';

export default function PostDetail() {
  const [post, setPost] = useState({});
  const { postId } = useParams();

  useEffect(() => {
      fireBase
         .collection('posts')
         .doc(postId)
         .get()
         .then((snapshot) => {
          console.log('snapshot', snapshot.data())
          setPost(snapshot.data());
         });
  }, [])
  return (
    <div className='post-detail'>
      <h1>{ post.title }</h1>
      <h2>{ post.subTitle }</h2>
      <p>{ post.content }</p>
    </div>
  )
}


