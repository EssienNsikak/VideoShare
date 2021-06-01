import React, { useEffect } from 'react';
import './_comments.scss';
import Comment from '../comment/Comment';
import { useDispatch, useSelector } from 'react-redux';
import { getVideoCommentById } from '../../redux/actions/comments.actions';

const Comments = ({ videoId }) => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getVideoCommentById(videoId))
  }, [videoId, dispatch]);

  const comments = useSelector(state => state.commentList.comments)

  const _comments = comments?.map(comment => comment.snippet.topLevelComment.snippet)

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
          _comments?.map((comment, i) => (
            <Comment comment={comment} key={i} />
          ))
        }
      </div>
    </div>
  )
}

export default Comments
