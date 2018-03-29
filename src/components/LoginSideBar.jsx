import React, { Component } from 'react';

export default class LoginSideBar extends Component {
  render(){
    return (
      <aside id="sidebar">
          <div class="dark">
              <h3>Login Form</h3>
              <form class="quote">
                  <div>
                      <label>User name</label><br/>
                      <input type="text" placeholder="User name..." />
                  </div>
                  <div>
                      <label>Password</label><br/>
                      <input type="password" placeholder="Password..." />
                  </div>
                  <button class="button_1" type="submit">Login</button>
              </form>
          </div>
      </aside>
    )
  }
}
