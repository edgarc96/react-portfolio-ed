import React, { Component } from 'react';
import moment from 'moment';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>DevCamp React Starter</h1>
        <h2>Eddie Portfolio</h2>
        <h3>{moment().format('MMMM Do YYYY, h:mm:ss a')}</h3>
      </div>
    );
  }
}
