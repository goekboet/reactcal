import React from 'react';
import ReactDOM from 'react-dom';
import Week from './Week';
import testdata from './Calendars/Week.testdata';

describe('Week view', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Week 
        label={testdata.Week.title}
        month={testdata.Week.month}
        weekdays={testdata.Week.weekdays}
        days={testdata.Week.days}/>, div);
  });
});