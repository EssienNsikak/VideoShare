import React from 'react';
import './_comments.scss';
import Comment from '../comment/Comment';

const Comments = () => {

  const handleComment = () => {

  }

  return (
    <div className='comments'>
      <p>1234 Comments</p>
      <div className='comments__form d-flex w-100 my-2'>
        <img 
          className='rounded-circle mr-3' 
          src='https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png' 
          alt='avatar' 
        />
        <form 
          className='d-flex flex-grow-1' 
          onSubmit={handleComment}
        >
          <input 
            type='text' 
            className='flex-grow-1' 
            placeholder='Add a public comment...' 
          />
          <button className='border-0 p-2'>Comment</button>
        </form>
      </div>
      <div className='comments__list'>
        {
          [...Array(15)].map(() => (
            <Comment />
          ))
        }
      </div>
    </div>
  )
}

export default Comments
