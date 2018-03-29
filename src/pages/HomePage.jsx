import React, { Component } from 'react';
import { HomeBox, NewLetter, ShowCase } from '../components';


export default class HomePage extends Component {
  render(){
    return (
      <div>
          <ShowCase />
          <NewLetter />
          <HomeBox />
      </div>
    )
  }
}
