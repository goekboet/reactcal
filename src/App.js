import React, { Component } from 'react';
import './App.css';
import Month from './Month';
import Months from './Calendars/Months';

class App extends Component {
  render() {
    const month = Months(2017, 2);
    return (
      <div className="App">
        <Month key="2017-2" label={month.label} weeks={month.weeks} />
      </div>
    );
  }
}

export default App;
