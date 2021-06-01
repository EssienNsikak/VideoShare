import React from 'react';
import moment from 'moment';
import './_comment.scss';

const Comment = ({ comment }) => {

  const { authorDisplayName, authorProfileImageUrl, publishedAt, textDisplay } = comment
  
  return (
    <div className='comment p-2 d-flex'>
      <img 
        className='rounded-circle mr-3' 
        src={authorProfileImageUrl}
        alt='avatar' 
      />
      <div className='comment__body'>
        <p className='mb-1 comment__header'>
          {authorDisplayName} • {moment(publishedAt).fromNow()}
        </p>
        <p className='mb-0'>{textDisplay}</p>
      </div>
    </div>
  )
}

export default Comment
