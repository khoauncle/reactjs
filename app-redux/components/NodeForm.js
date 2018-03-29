import React from 'react';
import {connect} from 'react-redux';
import {addItem, toggleAdding} from '../action';

class NodeForm extends React.Component {

  handleSubmit(event) {
    event.preventDefault();
    if (this.refs.txt.value) {
      let {dispatch} = this.props;
      dispatch(addItem(this.refs.txt.value));
      this.refs.txt.value = '';
      this.toggle();
    }
  }

  toggle() {
    let {dispatch} = this.props;
    dispatch(toggleAdding());
  }

  render()
  {
    if (this.props.isAdding)
      return (
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" placeholder="Please input text..." ref="txt"/>
          <input type="submit" value="Add"/>
        </form>
      )
    return (
      <button onClick={this.toggle.bind(this)}>+</button>
    )
  }
}

module.exports = connect(function(state) {
  return {isAdding: state.isAdding}
})(NodeForm);
