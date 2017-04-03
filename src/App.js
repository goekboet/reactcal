import React, { Component } from 'react';
import './App.css';
import D from 'date-fns';
import Month from './Month';
import Week from './Week';
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
    if (this.state.view === "month") 
      return (
        <div className="App">
          <Month 
            label={month.label} 
            weeks={month.weeks}
            weekview={this.changeView()}
            weekdays={month.weekdays}
            previousMonth={this.stepMonth(-1)}
            nextMonth={this.stepMonth(1)} />
        </div>
      );
    else
      return (
        <div className="App">
          <Week monthView={this.changeView()("2017-04-03", "month")} />
        </div>
      )
  }

  stepMonth(i) {
    return () => this.setState({ date: D.addMonths(this.state.date, i)})
  }

  changeView() {
    return (date, view) => () => this.setState({date: D.parse(date), view: view})
  }
}

export default App;
