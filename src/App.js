import React, { Component } from 'react';
import './App.css';
import D from 'date-fns';
import Month from './Month';
import Months from './Calendars/Months';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      date: new Date(),
      view: "month"
    }
    
    this.stepMonth = this.stepMonth.bind(this);
  }

  render() {
    const month = Months(this.state.date);
    return (
      <div className="App">
        <Month 
          label={month.label} 
          weeks={month.weeks}
          weekdays={month.weekdays}
          previousMonth={this.stepMonth(-1)}
          nextMonth={this.stepMonth(1)} />
      </div>
    );
  }

  stepMonth(i) {
    return () => this.setState({ date: D.addMonths(this.state.date, i)})
  }
}

export default App;
