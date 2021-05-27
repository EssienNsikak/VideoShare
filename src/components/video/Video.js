import React from 'react';
import './_video.scss';
import { AiFillEye } from 'react-icons/ai';

const Video = () => {
  return (
    <div className='video'>

      <div className='video__top'>
        <img 
          src='https://i.ytimg.com/an_webp/GiqLmVdCeew/mqdefault_6s.webp?du=3000&sqp=COiQuoUG&rs=AOn4CLCErFrK-Ljt9JsJGA3IE87c7f6A4g' 
          alt='' 
        />
        <span>05:32</span>
      </div>

      <div className='video__title'>
        Build A Responsive Web App In 30 Mins | Geek coders
      </div>

      <div className='video__details'>

        <span>
          <AiFillEye /> 51k Views •
        </span>

        <span>
          2 days ago
        </span>

      </div>

      <div className='video__channel'>
        <img src='https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png' alt='' />
        <p>Geek Coders</p>
      </div>
    
      </div>
  )
}

export default Video
