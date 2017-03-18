import React, { Component } from 'react';
import './App.css';
import Calendar from './Calendar';
import Months from './Calendars/Months';

class App extends Component {
  render() {
  const month = Months(2017, 3);
    return (
      <div className="App">
        <Calendar label={month.Label} days={month.days}/>
      </div>
    );
  }
}

export default App;
