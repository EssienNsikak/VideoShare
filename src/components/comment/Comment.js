import React from 'react';
import moment from 'moment';
import './_comment.scss';

const Comment = () => {
  return (
    <div className='comment p-2 d-flex'>
      <img 
        className='rounded-circle mr-3' 
        src='https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png' 
        alt='avatar' 
      />
      <div className='comment__body'>
        <p className='mb-1 comment__header'>
          Essien Nsikak • {moment('2021-5-30').fromNow()}
        </p>
        <p className='mb-0'>Nice video dude!</p>
      </div>
    </div>
  )
}

export default Comment
