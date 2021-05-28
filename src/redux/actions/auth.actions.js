import firebase from 'firebase/app';
import auth from '../../firebase'
import { 
  LOGIN_REQUEST, 
  LOGIN_SUCCESS, 
  LOAD_PROFILE, 
  LOGIN_FAIL, 
  LOG_OUT
} from '../actionType';

export const login = (req, res) => async dispatch => {
  try {
    dispatch({
      type: LOGIN_REQUEST
    })
    const provider = new firebase.auth.GoogleAuthProvider()
    const res = await auth.signInWithPopup(provider)
    const accessToken = res.credential.accessToken

    const profile = {
      name: res.additionalUserInfo.profile.name,
      photoURL: res.additionalUserInfo.profile.picture
    }

    sessionStorage.setItem('videoshare-access-token', accessToken)
    sessionStorage.setItem('videoshare-user', JSON.stringify(profile))

    dispatch({
      type: LOGIN_SUCCESS,
      payload: accessToken
    })

    dispatch({
      type: LOAD_PROFILE,
      payload: profile
    })

  } catch (err) {
    console.log(err.message)
    dispatch({
      type: LOGIN_FAIL,
      payload: err.message
    })
  }
};

export const log_out = () => async dispatch => {
  await auth.signOut()
  dispatch({
    type: LOG_OUT
  })

  sessionStorage.removeItem('videoshare-access-token')
  sessionStorage.removeItem('videoshare-user')
};