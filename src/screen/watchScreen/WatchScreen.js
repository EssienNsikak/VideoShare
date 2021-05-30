import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './_watchScreen.scss';
import VideoMetaData from '../../videoMetaData/VideoMetaData';
import VideoHorizontal from '../../components/videoHorizontal/VideoHorizontal';
import Comments from '../../components/comments/Comments';


const WatchScreen = () => {
  return (
    <Row>

      <Col lg={8}>
        <div className='watchScreen__player'>
          <iframe 
            src='https://www.youtube.com/embed/tgbNymZ7vqY' 
            frameBorder='0'
            title='MY VIDEO'
            allowFullScreen
            width='100%'
            height='100%'
          ></iframe>
        </div>

        <VideoMetaData />
        <Comments />
      </Col>

      <Col lg={4}>
        {
          [...Array(10)].map(() => <VideoHorizontal />)
        }
      </Col>

    </Row>
  )
}

export default WatchScreen;
