import {createStore} from 'redux';
import reducer from './reducer';

var store = createStore(reducer);

store.subscribe(() => console.log('Change:', store.getState()));

module.exports = store;
