import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import './_watchScreen.scss';
import VideoMetaData from '../../videoMetaData/VideoMetaData';
import VideoHorizontal from '../../components/videoHorizontal/VideoHorizontal';
import Comments from '../../components/comments/Comments';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getVideoById, getRelatedVideos } from '../../redux/actions/videos.action';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';


const WatchScreen = () => {

  const { id } = useParams()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getVideoById(id))
    dispatch(getRelatedVideos(id))
  }, [dispatch, id])

  const { videos, loading: relatedVideosLoading } = useSelector(state => state.relatedVideos)
  const { video, loading } =  useSelector(state => state.selectedVideo)

  return (
    <Row>

      <Col lg={8}>
        <div className='watchScreen__player'>
          <iframe 
            src={`https://www.youtube.com/embed/${id}`} 
            frameBorder='0'
            title={video?.snippet?.title}
            allowFullScreen
            width='100%'
            height='100%'
          ></iframe>
        </div>

        {
          !loading 
            ? ( <VideoMetaData video={video} videoId={id} /> ) 
            : ( <h6>Loading...</h6> )
        }
        
        <Comments 
          videoId={id} 
          totalComments={video?.statistics?.commentCount} 
        />
      </Col>

      <Col lg={4}>
        {
          !loading ? 
          videos
            ?.filter(video => video.snippet)
            .map((video) => (
              <VideoHorizontal video={video} key={video.id.videoId} />
            ))
          :
          <SkeletonTheme color='#343a40' highlightColor='#3c4147'>
            <Skeleton width='100%' height='130px' count={15} />
          </SkeletonTheme>
        }
      </Col>

    </Row>
  )
}

export default WatchScreen;
