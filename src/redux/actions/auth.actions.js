import { 
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../types';

export const loginSuccess = (payload) => {
  return {
    type: LOGIN_SUCCESS,
    payload
  }
}

export const loginFailure = (error) => {
  return {
    type: LOGIN_FAILURE,
    error
  }
}

export const logout = () => {
  return { type: LOGOUT }
}