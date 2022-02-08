import {combineReducers} from 'redux';
import authReducer from './AuthReducer';
import todoReducer from './TodoReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  todo: todoReducer
});

export default rootReducer;