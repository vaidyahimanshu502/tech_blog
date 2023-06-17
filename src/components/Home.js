import React from 'react';
import { useState, useEffect } from 'react';
import { fireBase } from '../firebase';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';


// Using styled-components Framework for styling
const BlogHeading = styled.h1`
   text-align: center;
   color: #2196f3;
   margin-bottom: 2px;
`;

const BlogSubTitle = styled.p`
   font-size: 13px;
`;

const Post = styled.div`
    border: 1px solid #e1e1e1;
    padding: 10px 10px;
    border-radius: 5px;
    margin-top: 10px;

    &:hover {
      border: 1px solid green;
    }

    h3 {
      margin: 0;
      padding: 0;
      font-size: 25px;
      font-weight: bold;
      color: black;
    }

    @media (max-width : 800px) {
      border: 1px solid red;
    }
`;

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fireBase
       .collection('posts')
       .get()
       .then((snapshot) => {
        const posts = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data()
          }
        });
        console.log('Posts ::', posts);
        setPosts(posts);
       })
  }, [])
  return (
    <Post className='home'>
      <BlogHeading>Tech Blogs</BlogHeading>
      <div id='blog-by'> Himanshu Vaidya </div>

      {posts.map((post, index) => (
        <Post className='post' key={`post-${index}`}>
          <Link to={`/post/${post.id}`}>
           <h3>{ post.title }</h3>
          </Link>
          <BlogSubTitle>{ post.subTitle }</BlogSubTitle>
        </Post>
      ))}
    </Post>
  )
}
