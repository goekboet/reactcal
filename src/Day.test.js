import React from 'react';
import ReactDOM from 'react-dom';
import Day from './Day';

describe('Day component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Day belongs="true" date="1" week="1" />, div);
  });
});


