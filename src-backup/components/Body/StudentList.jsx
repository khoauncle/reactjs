import React, { Component } from 'react';      ( <p> {person.name} </p> )

class Student extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <p> {this.props.name} </p>
  }
}

export default class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listStudent : [{
        id: 1,
        name: 'Nguyen Ngoc Long'
        },
        {
        id: 2,
        name: 'Nguyen Van Phuoc'
        }
      ]
    }
  }

  render() {
    let renderStudentItems = this.state.listStudent.map( (student) => {
      <Student key={student.id} {...student} />
      console.log('enter map function...' + student)
    })

    console.log('renderStudentItems' + renderStudentItems);

    return (
      <div class="App">
          <h1>Hi, I'm a React App</h1>
          <div class="Person">
              renderStudentItems
          </div>
      </div>
    )
  }
}
