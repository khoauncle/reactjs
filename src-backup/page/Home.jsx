import React, {Component} from 'react';
import {Header, Body, Footer} from '../components';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route} from 'react-router-dom/Route';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header/>
        <Body/>
        <Footer/>
      </div>
    )
  }
}
