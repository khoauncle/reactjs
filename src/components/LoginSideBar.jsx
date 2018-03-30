import React, {Component} from 'react';
import {connect} from 'react-redux';
import {login} from '../actions';

class LoginSideBar extends Component {

  handleSubmit(event) {
    event.preventDefault();
    let {isLogin, login} = this.props;
    if (!this.props.isLogin) {
      if (this.refs.username.value && this.refs.password.value) {
        this.props.login(this.refs.username.value, this.refs.password.value);
      }
    } else
      console.log('You already login...');
    }

  render() {
    return (
      <aside id="sidebar">
        <div class="dark">
          <h3>Login Form</h3>
          <form class="quote" onSubmit={this.handleSubmit.bind(this)}>
            <div>
              <label>User name</label><br/>
              <input type="text" placeholder="User name..." ref="username"/>
            </div>
            <div>
              <label>Password</label><br/>
              <input type="password" placeholder="Password..." ref="password"/>
            </div>
            <button class="button_1" type="submit">Login</button>
          </form>
          <h3>GET LOGIN STATUS: {this.props.isLogin.toString()}</h3>
        </div>
      </aside>
    )
  }
}

const mapStateToProps = (state) => {
  return {isLogin: state.isLogin}
}

const mapDispatchToProps = dispatch => {
  return {
    login: (username, password) => dispatch(login(username, password))
  }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(LoginSideBar);
