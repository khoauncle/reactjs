import React, {Component} from 'react';

class DisplayPerson extends Component {
  constructor(props) {
    super(props);
  }

  render()
  {
    return <p> {this.props.name} </p>
  }

}

function DisplayPerson(props) {
  return (
    <div>
      <p> {props.name} </p>
    </div>
  );
}

export default class ShowList extends Component {
  constructor(props) {
    super(props);
    this.data = {
      persons: [
        {
          name: 'Nguyen Ngoc Long'
        }, {
          name: 'Do Duy Hieu'
        }, {
          name: 'Chau Viet Cuong'
        }
      ]
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps222...');
    let tempPersons = [...this.data.persons];
    let checkDup = false;
    tempPersons.map(person => {
      person.name === nextProps.fixValue ? checkDup = true : null;
    })

    if(!checkDup) {
      let tempObj = { name: nextProps.fixValue }
      tempPersons.push(tempObj);
      this.data.persons = [...tempPersons];
    }
  }

  render() {
    console.log('render222...')
    let renderPerson = (
      <div>
        {
          this.data.persons.map( (person, index) => {
            return (
                <DisplayPerson key={index} {...person} />
            )
          })
        }
      </div>
    )

    return (
        renderPerson
    )
  }
}
