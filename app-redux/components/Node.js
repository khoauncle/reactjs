import React from 'react';
import {connect} from 'react-redux';
import {removeItem} from '../action';

class Node extends React.Component {

  handleClick() {
    let {dispatch, index} = this.props;
    dispatch(removeItem(index));
  }

  render()
  {
    var style = {
      margin: '10px'
    };
    return (
      <div style={style}>
        <span style={style}>{this.props.children}</span>
        <button onClick={this.handleClick.bind(this)}>Delete</button>
      </div>
    )
  }
}

module.exports = connect()(Node);
