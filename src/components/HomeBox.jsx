import React, { Component } from 'react';
import logo_html from '../../assets/img/logo_html.png';
import logo_css from '../../assets/img/logo_css.png';
import logo_brush from '../../assets/img/logo_brush.png';

export default class HomeBox extends Component {
  render(){
    return (
      <section id="boxes">
          <div class="container">
              <div class="box">
                  <img src={logo_html} alt="logo_html"/>
                  <h3>HTML5 Markup</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies</p>
              </div>
              <div class="box">
                  <img src={logo_css} alt="logo_css"/>
                  <h3>CSS3 Styling</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies</p>
              </div>
              <div class="box">
                  <img src={logo_brush} alt="logo_brush"/>
                  <h3>Graphic Design</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies</p>
              </div>
          </div>
      </section>
    )
  }
}
