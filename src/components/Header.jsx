import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render(){
    return (
      <header>
          <div class="container">
              <div id="branding">
                  <h1><span class="highlight">Acme</span> Web Design</h1>
              </div>
              <nav>
                  <ul>
                      <li><Link to="/">Homes</Link></li>
                      <li><Link to="/about">About</Link></li>
                      <li><Link to="/service">Service</Link></li>
                      <li><Link to="/login">Login</Link></li>
                  </ul>
              </nav>
          </div>
      </header>
    )
  }
}
