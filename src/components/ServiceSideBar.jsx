import React, { Component } from 'react';

export default class ServiceSideBar extends Component {
  render(){
    return (
      <aside id="sidebar">
          <div class="dark">
              <h3>Get A Quote</h3>
              <form class="quote">
                  <div>
                      <label>Name</label><br/>
                      <input type="text" placeholder="Name" />
                  </div>
                  <div>
                      <label>Email</label><br/>
                      <input type="email" placeholder="Emial Address" />
                  </div>
                  <div>
                      <label>Message</label><br/>
                      <textarea placeholder="Message"></textarea>
                  </div>
                  <button class="button_1" type="submit">Send</button>
              </form>
          </div>
      </aside>
    )
  }
}
