import { 
  HOME_VIDEOS_REQUEST, 
  HOME_VIDEOS_SUCCESS, 
  HOME_VIDEOS_FAIL, 
  SELECTED_VIDEO_REQUEST, 
  SELECTED_VIDEO_SUCCESS,
  SELECTED_VIDEO_FAIL
} from '../actionType';
import request from '../../api';

export const getPopularVideos = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: HOME_VIDEOS_REQUEST
    })
    const { data } = await request('/videos', {
      params: {
        part: 'snippet, contentDetails, statistics',
        chart: 'mostPopular',
        regionCode: 'NG',
        maxResults: 100,
        pageToken: getState().homeVideos.nextPageToken,
      }
    });
    
    dispatch({
      type: HOME_VIDEOS_SUCCESS,
      payload: {
        videos: data.items,
        nextPageToken: data.nextPageToken,
        category: 'All'
      }
    })
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: HOME_VIDEOS_FAIL,
      payload: err.message
    })
  }
};


export const getVideosByCategory = (keyword) => async (dispatch, getState) => {
  try {
    dispatch({
      type: HOME_VIDEOS_REQUEST
    })
    const { data } = await request('/search', {
      params: {
        part: 'snippet',
        maxResults: 100,
        pageToken: getState().homeVideos.nextPageToken,
        q: keyword,
        type: 'video'
      }
    });
    
    dispatch({
      type: HOME_VIDEOS_SUCCESS,
      payload: {
        videos: data.items,
        nextPageToken: data.nextPageToken,
        category: keyword
      }
    })
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: HOME_VIDEOS_FAIL,
      payload: err.message
    })
  }
};

export const getVideoById = (id) => async (dispatch) => {
  try {
    dispatch({
      type: SELECTED_VIDEO_REQUEST
    })
    const { data } = await request('/videos', {
      params: {
        part: 'snippet, statistics',
        id: id
      }
    })

    dispatch({
      type: SELECTED_VIDEO_SUCCESS,
      payload: data.items[0]
    })
  } catch (err) {
    console.log(err.message)
    dispatch({
      type: SELECTED_VIDEO_FAIL,
      payload: err.message
    })
  }
};