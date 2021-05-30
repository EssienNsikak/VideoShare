import React from 'react';
import { AiFillEye } from 'react-icons/ai';
import request from '../../api';
import moment from 'moment';
import numeral from 'numeral';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './_videoHorizontal.scss';
import { Row, Col } from 'react-bootstrap';

const VideoHorizontal = () => {

  const seconds = moment.duration('100').asSeconds()
  const _duration = moment.utc(seconds * 1000).format('mm:ss')

  return (
    <Row className='videoHorizontal m-1 py-2 align-items-center'>
      
      <Col xs={6} md={4} className='videoHorizontal__left'>
        <LazyLoadImage 
          src='https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png' 
          effect='blur'
          className='videoHorizontal__thumbnail'
          wrapperClassName='videoHorizontal__thumbnail-wrapper' 
        />
        <span className='video__top__duration'>{_duration}</span>
      </Col>

      <Col xs={6} md={8} className='videoHorizontal__right p-0'>
        <p className='videoHorizontal__title mb-1'>
          Be a full stack developer in 6 months
        </p>
        <div className='videoHorizontal__details'>
          <AiFillEye />{numeral(1000000).format('0.a')} Views •
          {moment('2021-05-30').fromNow()}
        </div>
        <div className='videoHorizontal__channel d-flex align-items-center my-1'>
          {/*<LazyLoadImage 
            src='https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png' 
            effect='blur'
          />*/}
          <p>Geek Coders</p>
        </div>
      </Col>

    </Row>
  )
}

export default VideoHorizontal
