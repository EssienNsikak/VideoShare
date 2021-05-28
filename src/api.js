import Axios from 'axios';

// Creating Axios instance
const request = Axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3/',
  params: {
    key: process.env.REACT_APP_YOUTUBE_API_KEY
  },
});

export default request;