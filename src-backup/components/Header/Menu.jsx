import React, {Component} from 'react';
import Logo from './Logo.jsx';

export default class Menu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container d-flex flex-column flex-md-row justify-content-between">
        <Logo name = { this.props.name } old = { this.props.old }/>
        <a className="py-2 d-none d-md-inline-block" href="#">Tour</a>
        <a className="py-2 d-none d-md-inline-block" href="#">Product</a>
        <a className="py-2 d-none d-md-inline-block" href="#">Features</a>
        <a className="py-2 d-none d-md-inline-block" href="#">Enterprise</a>
        <a className="py-2 d-none d-md-inline-block" href="#">Support</a>
        <a className="py-2 d-none d-md-inline-block" href="#">Pricing</a>
        <a className="py-2 d-none d-md-inline-block" href="#">Cart</a>
      </div>
    )
  }
}
