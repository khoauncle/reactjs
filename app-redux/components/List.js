import React from 'react';
import Node from './Node';
import NodeForm from './NodeForm';
import {connect} from 'react-redux';

class List extends React.Component {

  render() {
    return (
      <div>
        <NodeForm />
        {
          this.props.array.map((item, i) =>
            <Node key={i} index={i}>{ item }</Node>
          )
        }
      </div>
    )
  }
}

module.exports = connect(function(state){
  return { array: state.array }
})(List);
