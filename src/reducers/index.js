import loginReducer from './accountReducer.jsx';
import {combineReducers} from 'redux';

var reducer = combineReducers({
  isLogin: loginReducer
})

module.exports = reducer;
