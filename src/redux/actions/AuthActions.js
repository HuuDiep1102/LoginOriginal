import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./TypeActions"

export const loginSuccess = (email, password) => {
  return dispatch => {
    if (email === 'tony@gmail.com' && password === '123456') {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          email: email,
          password: password
        }
      })
    }
  };
};

export const logout = () => dispatch => {
  dispatch({ type: LOGOUT_SUCCESS });
};

export const loginRequest = () => dispatch => {
  dispatch({ type: LOGIN_REQUEST });
};

