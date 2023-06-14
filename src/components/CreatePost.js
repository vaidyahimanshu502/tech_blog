import React from 'react';
// import { useState } from 'react';
import { fireBase } from '../firebase';
import { useFormInput } from './hooks'

export default function CreatePost() {
    
    // const [title, setTitle] = useState(' ');
    // const [subTitle, setSubTitle] = useState(' ');
    // const [content, setContent] = useState(' ');


//going to apply CUSTOM HOOKS
          const title = useFormInput('');
          const subTitle = useFormInput('');
          const content = useFormInput('');

    function handleSubmit(e) {
        e.preventDefault()
        // console.log('Title', title)
        // console.log('subTitle', subTitle)
        // console.log('Content', content)

        fireBase.collection('posts').add({
          title : title.value,
          content: content.value,
          subTitle: subTitle.value,
          createdAt: new Date(),
        })
    }

  return (
    <div className='create-post'>
        <h1>Create Post</h1>
        <form onSubmit={handleSubmit}>
           <div className='form-field'>
             <label>Title:</label>
             {/* <input value={title} onChange={(e) => setTitle(e.target.value)} /> */}
             {/* {console.log('Title', title)} */}
             <input {...title} />
           </div>
           <div className='form-field'>
             <label>Sub-Title:</label>
             {/* <input value={subTitle} onChange={(e) => setSubTitle(e.target.value)} /> */}
             <input {...subTitle} />
           </div>
           <div className='form-field'>
             <label>Content:</label>
             {/* <textarea value={content} onChange={(e) => setContent(e.target.value)} ></textarea> */}
             <textarea {...content}></textarea>
           </div>
           <button className='create-post-btn'>Create Post</button>
        </form>
    </div>
  )
}


