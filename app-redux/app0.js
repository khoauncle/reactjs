import React from 'react';
import ReactDOM from 'react-dom';
import {Main} from './page';
import {Provider} from 'react-redux';
import store from './storeConfig';

ReactDOM.render(

  <Provider store={store}>
    <Main />
  </Provider>, document.getElementById('root'));
