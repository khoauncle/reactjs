import React, { Component } from 'react';

class UserItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <li><p>{this.props.name} - {this.props.address}</p></li>
  }
}

export default class UserList extends Component {
  constructor(props) {
    super(props);
  // const UserItem = ({ name, address }) => <li>{ name } - { address } </li>
  // const UserList = ({users}) => <ul> {
  //     users.map( user => <UserItem name={user.name} address={user.address} />)
  //   } </ul>

  this.state = {
    users: [
          {id: 1, name: 'Nguyen Ngoc Long', address: 'Da Nang'},
          {id: 2, name: 'Nguyen Van Ngoc', address: 'Quang Binh'}
    ]
    };
  }

  render() {
    let renderUserItems = this.state.users.map( (user) => (
        <UserItem key={user.id} {...user} /> )
      );
    return (
      <ul>
      {
        renderUserItems
      }
    </ul>
  )
  }
}
