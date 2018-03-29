import {combineReducers} from 'redux';
import arrayReducer from './arrayReducer';
import toggleReducer from './toggleReducer';

var reducer = combineReducers({
  array: arrayReducer, isAdding: toggleReducer
})

module.exports = reducer;
