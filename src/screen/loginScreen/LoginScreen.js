import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './_loginScreen.scss';
import { login } from '../../redux/actions/auth.actions';
import { useHistory } from 'react-router-dom';

const LoginScreen = () => {

  const dispatch = useDispatch()

  const accessToken = useSelector( state => state.auth.accessToken )

  const handleLogin = () => {
    dispatch(login())
  }

  const history = useHistory()

  useEffect(() => {
    if (accessToken) {
      history.push('/')
    }
  }, [accessToken, history])

  return (
    <div className='login'>
      <div className='login__container'>
        <h2>VideoShare</h2>      
        <img 
          className='' 
          src='http://pngimg.com/uploads/youtube/youtube_PNG2.png' 
          alt='' 
        />
        <button onClick={handleLogin}>Login With Google</button>
        <p>Create And Share Videos With Your Friends Around The World!</p>
      </div>
    </div>
  )
}

export default LoginScreen
