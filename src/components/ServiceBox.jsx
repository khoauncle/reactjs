import React, { Component } from 'react';
import ServiceSideBar from './ServiceSideBar.jsx';

export default class ServiceBox extends Component {
  render(){
    return (
      <section id="main">
          <div class="container">
              <article id="main-col">
                  <h1 class="page-title">Services</h1>
                  <ul id="services">
                      <li>
                          <h3>Website Design</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies at, vulputate id lorem. Nulla facilisi.</p>
                          <p>Pricing: $1,000 - $3,000</p>
                      </li>
                      <li>
                          <h3>Website Maintenance</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies at, vulputate id lorem. Nulla facilisi.</p>
                          <p>Pricing: $250 per month</p>
                      </li>
                      <li>
                          <h3>Website Hosting</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies at, vulputate id lorem. Nulla facilisi.</p>
                          <p>Pricing: $25 per month</p>
                      </li>
                  </ul>
              </article>
              <ServiceSideBar/>
          </div>
      </section>
    )
  }
}
