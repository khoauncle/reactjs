import React, {Component} from 'react';
import Menu  from './Menu.jsx';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let objEx = {
      name: 'LongNguyen',
      old: 21
    }
    return (
      <nav className="site-header sticky-top py-1">
          <Menu {...objEx} />
      </nav>
    );
  }
}
