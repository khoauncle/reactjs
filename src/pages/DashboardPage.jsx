import React, {Component} from 'react';
import { Route,Switch } from 'react-router-dom';
import {Header, Footer} from '../components';
import HomePage from './HomePage.jsx';
import AboutPage from './AboutPage.jsx';
import ServicePage from './ServicePage.jsx';
import LoginPage from './LoginPage.jsx';

export default class DashboardPage extends Component {
  render() {
    return (
      <body>
        <Header/>
          <div className="switch-content">
            <Switch>
              <Route exact path="/" component={HomePage}/>
              <Route path="/about" component={AboutPage}/>
              <Route path="/service" component={ServicePage}/>
              <Route path="/login" component={LoginPage}/>
            </Switch>
          </div>
        <Footer/>
      </body>
    )
  }
}
