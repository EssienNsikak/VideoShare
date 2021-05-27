import React from 'react';
import './_loginScreen.scss';

const LoginScreen = () => {
  return (
    <div className='login'>
      <div className='login__container'>
        <img 
          className='' 
          src='http://pngimg.com/uploads/youtube/youtube_PNG2.png' 
          alt='' 
        />
        <button>Login With Google</button>
        <p>VideoShare - Create And Share Videos With Your Friends Around The World!</p>
      </div>
    </div>
  )
}

export default LoginScreen
