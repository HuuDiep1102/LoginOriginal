import fetch from 'isomorphic-fetch'

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

// export function login(username, password) {
//   return (dispatch) => {
//     dispatch(loginRequest())

//     // Note: This only works in node.js, use an implementation that works
//     // for the platform you're using, e.g.: base64-js for React Native, or
//     // btoa() for browsers.
//     const hash = new Buffer(`${username}:${password}`).toString('base64')
//     return fetch('https://httpbin.org/basic-auth/admin/secret', {
//       headers: {
//         'Authorization': `Basic ${hash}`
//       }
//     })
//     .then(response => response.json().then(json => ({ json, response })))
//     .then(({json, response}) => {
//       if (response.ok === false) {
//         return Promise.reject(response, json)
//       }
//       return json
//     })
//     .then(
//       // success
//       data => {
//         // We pass the `authentication hash` down to the reducer so that it
//         // can be used in subsequent API requests.
//         // data = { authenticated: true, user: 'admin' }
//         dispatch(loginSuccess(hash, data.user))
//       },
//       // failure
//       (response, data) => dispatch(loginFailure(data.error || 'Log in failed'))
//     )
//   }
// }
