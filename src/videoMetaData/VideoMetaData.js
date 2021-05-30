import React from 'react';
import './_videoMetaData.scss';
import moment from 'moment';
import numeral from 'numeral';
import { MdThumbUp, MdThumbDown } from 'react-icons/md';
import ShowMoreText from 'react-show-more-text'

const VideoMetaData = () => {
  return (
    <div className='videoMetaData py-2'>

      <div className='videoMetaData__top'>
        <h5>Video Title</h5>

        <div className='d-flex justify-content-between align-items-center py-1'>
          <span>
            {numeral(1000).format('0.a')} Views •
            {moment('2021-05-30').fromNow()}
          </span>
        

          <div>

            <span className='mr-3'>
              <MdThumbUp size={26} />
              {numeral(1000).format('0.a')}
            </span>
            <span className='mr-3'>
              <MdThumbDown size={26} />
              {numeral(1000).format('0.a')}
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
            <span>Geek Coders</span>
            <span>{numeral(1000).format('0.a')} Subscribers</span>
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a lorem neque. Proin malesuada, tortor sed bibendum luctus, lorem nisi imperdiet leo, eget facilisis metus nisi a libero. Vivamus et ligula eget erat molestie malesuada. Duis urna lectus, pellentesque ut leo sit amet, elementum pharetra urna. Quisque elementum sed est sed mattis. Quisque in lorem turpis. Integer ullamcorper tortor tellus, elementum aliquam tellus viverra vitae. Ut in neque nec diam hendrerit porttitor. Curabitur pellentesque maximus tellus, id hendrerit ligula. Etiam finibus quam a nunc tempus sollicitudin. Vivamus quis libero dictum, lacinia quam quis, lacinia purus. Quisque sed enim vitae arcu lacinia scelerisque sit amet eu libero. Nulla nec vehicula arcu. Aliquam sit amet diam augue.
        </ShowMoreText>
      </div>

    </div>
  )
}

export default VideoMetaData
