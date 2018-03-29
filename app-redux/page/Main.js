import React, {Component} from 'react';
import {List} from '../components';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';

export default class Main extends Component {
  render() {
    return (
      <Router>
        <div className="main-app">
          <List />
        </div>
      </Router>
    )
  }
}

//
// <Route path="/" render={() => {
//     return (
//       <h1>Welcom Home page</h1>
//     )
//   }}/>
// <Route path='/about' render={() => {
//   return (
//     <h1>Welcom About page</h1>
//   )
// }}/>
