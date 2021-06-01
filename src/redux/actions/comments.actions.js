import { 
  COMMENT_LIST_REQUEST, 
  COMMENT_LIST_SUCCESS, 
  COMMENT_LIST_FAIL, 
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAIL
} from '../actionType';
import request from '../../api';

export const getVideoCommentById = (id) => async (dispatch) => {
  try {
    dispatch({
      type: COMMENT_LIST_REQUEST
    })
    const { data } = await request('/commentThreads', {
      params: {
        part: 'snippet',
        videoId: id
      }
    })

    dispatch({
      type: COMMENT_LIST_SUCCESS,
      payload: data.items
    })
  } catch (err) {
    dispatch({
      type: COMMENT_LIST_FAIL,
      payload: err.response.data.message
    })
  }
};

export const addComment = (id, text) => async (dispatch, getState) => {
  try {

    const obj = {
      snippet: {
        videoId: id,
        topLevelComment: {
          snippet: {
            textOriginal: text
          },
        },
      },
    }

    await request.post('/commentThreads', obj, {
      params: {
        part: 'snippet'
      },
      headers: {
        Authorization: `Bearer ${getState().auth.accessToken}`
      }
    })

    dispatch({
      type: CREATE_COMMENT_SUCCESS,
    })

    setTimeout(() => dispatch(getVideoCommentById(id)), 4000)
    
  } catch (err) {
    dispatch({
      type: CREATE_COMMENT_FAIL,
      payload: err.response.data.message
    })
  }
};