// var React = require('react');
// var ReactDOM = require('react-dom');
// var Hello = require('./components/Hello');
// import List from './components/List';
// import {Provider} from 'react-redux';
// import store from './storeConfig';
// import { Main } from './page';
//
// ReactDOM.render(
//   <Provider store={store}>
//     <Main />
//   </Provider>,
//   document.getElementById('root')
// );
import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
	, document.getElementById('root'));
