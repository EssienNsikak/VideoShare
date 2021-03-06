import React, { useState, useEffect } from 'react';
import './_comments.scss';
import Comment from '../comment/Comment';
import { useDispatch, useSelector } from 'react-redux';
import { getVideoCommentById, addComment } from '../../redux/actions/comments.actions';

const Comments = ({ videoId, totalComments }) => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getVideoCommentById(videoId))
  }, [videoId, dispatch]);

  const comments = useSelector(state => state.commentList.comments)

  const user = useSelector( state => state.auth?.user )

  const [text, setText] = useState('')

  const _comments = comments?.map(comment => comment.snippet.topLevelComment.snippet)

  const handleComment = (e) => {
    e.preventDefault();
    if (text.length === 0) return
    dispatch(addComment(videoId, text))
    setText('')
  }

  return (
    <div className='comments'>
      <p>{totalComments} Comments</p>
      <div className='comments__form d-flex w-100 my-2'>
        <img 
          className='rounded-circle mr-3' 
          src={user?.photoURL}
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
            value={text}
            onChange = { e => setText(e.target.value)}
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

export default Comments;
