import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../actions/TypeActions";
import axios from "axios";
const INITIAL_STATE = {
    isLoggedIn:false,
    email: '',
    password: '',
    token: ''
}

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { 
        ...state, 
        isLoggedIn: true,
        email: action.payload.email,
        password: action.payload.password,
        token: action.payload.token
      };
    case LOGOUT_SUCCESS:
      return { 
        ...state, 
        isLoggedIn: false,
        email: '',
        password: '',
        token: '',
      };
    // case LOGIN_REQUEST:
    //   const res = await axios.post("https://codersx-swagger.glitch.me/api/auth/login", {
    //     email, password
    //   });
    //   dispatch(LOGIN_SUCCESS(res.data));
    default:
      return state;
  }
};

export default authReducer;
