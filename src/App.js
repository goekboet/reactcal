import React, { Component } from 'react';
import './App.css';
import Month from './Month';
import Months from './Calendars/Months';

class App extends Component {
  render() {
    const month = Months(2017, 2);
    return (
      <div className="App">
        <Month 
          label={month.label} 
          weeks={month.weeks}
          weekdays={month.weekdays} />
      </div>
    );
  }
}

export default App;
