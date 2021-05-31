import React from 'react';
import './_videoMetaData.scss';
import moment from 'moment';
import numeral from 'numeral';
import { MdThumbUp, MdThumbDown } from 'react-icons/md';
import ShowMoreText from 'react-show-more-text'

const VideoMetaData = ({ video: { snippet, statistics }, vidoe }) => {

  const { channelTitle, channelId, description, title, publishedAt } = snippet;
  const { viewCount, likeCount, dislikeCount } = statistics;

  return (
    <div className='videoMetaData py-2'>

      <div className='videoMetaData__top'>
        <h5>{title}</h5>

        <div className='d-flex justify-content-between align-items-center py-1'>
          <span>
            {numeral(viewCount).format('0.a')} Views •
            {moment(publishedAt).fromNow()}
          </span>
        

          <div>

            <span className='mr-3'>
              <MdThumbUp size={26} />
              {numeral(likeCount).format('0.a')}
            </span>
            <span className='mr-3'>
              <MdThumbDown size={26} />
              {numeral(dislikeCount).format('0.a')}
            </span>
          
          </div>
        </div>
      </div>
      
      <div className='videoMetaData__channel d-flex justify-content-between align-items-center my-2 py-3'>
        <div className='d-flex'>
          <img 
            className='mr-3 rounded-circle'
            src='https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png' 
            alt='avatar' 
          />
          <div className='d-flex flex-column'>
            <span>{channelTitle}</span>
            <span>{numeral(100000).format('0.a')} Subscribers</span>
          </div>          
        </div>
        <button className='btn border-0 p-2 m-2'>Subscribe</button>
      </div>

      <div className='videoMetaData__description'>
        <ShowMoreText
          lines={3}
          more='SHOW MORE'
          less='SHOW LESS'
          anchorClass='showMoreText'
          expanded={false}
        >
          {description}
        </ShowMoreText>
      </div>

    </div>
  )
}

export default VideoMetaData
