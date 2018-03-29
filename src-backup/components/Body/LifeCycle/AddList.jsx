import React, {Component} from 'react';
import ShowList from './ShowList.jsx'

export default class AddList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      faxValue: ''
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.state.inputValue
      ? this.setState({faxValue: this.state.inputValue})
      : null;
  }

  handleChange(event) {
    this.setState({inputValue: event.target.value})
  }

  render() {
    return (
      <div className="jumbotron">
        <div className="container">
          <ShowList fixValue={this.state.faxValue}/>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <label>
              Submit Person Name: &ensp;
              <input type="text" value={this.state.inputValue} onChange={this.handleChange.bind(this)}/>
            </label>
            <input type="submit" value="Submit"/>
          </form>
        </div>
      </div>
    )
  }
}
