import React, { Component } from 'react';
import {connect} from 'react-redux';
import {login} from '../actions';

class LoginSideBar extends Component {

  handleSubmit(event) {
    event.preventDefault();
    console.log('before:',this.props.isLogin);
    if(!this.props.isLogin) {
      if (this.refs.username.value && this.refs.password.value) {
        let {dispatch} = this.props;
        dispatch(login(this.refs.username.value, this.refs.password.value));
      }
    }
    else
      console.log('You already login...');
    console.log('after:',this.props.isLogin);
    if(this.props.isLogin)
      alert('You login success...');
    else
      alert('You login fail...');
  }

  render(){
    return (
      <aside id="sidebar">
          <div class="dark">
              <h3>Login Form</h3>
              <form class="quote" onSubmit={this.handleSubmit.bind(this)}>
                  <div>
                      <label>User name</label><br/>
                      <input type="text" placeholder="User name..." ref="username" />
                  </div>
                  <div>
                      <label>Password</label><br/>
                      <input type="password" placeholder="Password..." ref="password" />
                  </div>
                  <button class="button_1" type="submit">Login</button>
              </form>
          </div>
      </aside>
    )
  }
}

module.exports = connect(function(state){
  return {isLogin: state.isLogin}
})(LoginSideBar);
