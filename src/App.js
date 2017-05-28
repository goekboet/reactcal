import React, { Component } from 'react';
import './App.css';
import D from 'date-fns';
import Month from './Month';
import Week from './Week';
import Months from './Calendars/Months';
import Weeks from './Calendars/Week';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      date: new Date(),
      view: "month",
    }
    
    this.step = this.step.bind(this);
    //this.stepMonth = this.stepMonth.bind(this);
  }

  render() {
    if (this.state.view === "month") {
      const month = Months(this.state.date);
      return (
        <div className="App">
          <Month 
            label={month.label} 
            weeks={month.weeks}
            weekview={this.changeView()}
            weekdays={month.weekdays}
            previousMonth={this.step(-1, "month")}
            nextMonth={this.step(1, "month")} />
        </div>
      );
    }
    else {
      const week = Weeks(this.state.date);
      
      return (
        <div className="App">
          <Week
            label={week.title}
            days={week.days}
            weekdays={week.weekdays}
          />
        </div>
      )
    }
  }

  step(i, p) {
    if (p === "month")
      return () => this.setState({ date: D.addMonths(this.state.date, i)})
    else
      return () => this.setState({ date: D.addWeeks(this.state.date, i)})
  }

  // stepMonth(i) {
  //   return () => this.setState({ date: D.addMonths(this.state.date, i)})
  // }

  changeView() {
    return (date, view) => () => this.setState({date: D.parse(date), view: view})
  }
}

export default App;
