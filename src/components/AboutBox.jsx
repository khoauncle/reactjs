import React, { Component } from 'react';
import AboutSideBar from './AboutSideBar.jsx';
import AboutArticle from './AboutArticle.jsx';

export default class AboutBox extends Component {
  render(){
    return (
      <section id="main">
          <div class="container">
              <AboutArticle />
              <AboutSideBar />
          </div>
      </section>
    )
  }
}
