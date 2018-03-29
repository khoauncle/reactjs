import React, {Component} from 'react';
import Banner from './Banner.jsx';
import Content from './Content.jsx';
// import UserList from './UserList.jsx';
import ListPerson from './ListPerson.jsx';
// import StudentList from './StudentList.jsx';
// import ShowList from './LifeCycle/ShowList.jsx';
import AddList from './LifeCycle/AddList.jsx';

export default class Body extends Component {
  constructor(props) {
    super(props);
    const users = [
      {id: 1, name: 'Nguyen Ngoc Long', address: 'Da Nang'},
      {id: 2, name: 'Nguyen Thi Tuyet', address: 'Quang Binh'}
    ]
  }

  render() {
    return (
      <div>
        <AddList />
      </div>
    )
  }
}
