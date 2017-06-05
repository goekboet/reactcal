import React, { Component } from 'react';
import Calendar from './Calendar/Calendar'
import './App.css';

class App extends Component {
  render() {
    return (<Calendar initDate={new Date()} initView="week"/>)
  }
}

export default App;
