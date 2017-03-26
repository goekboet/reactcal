import React from 'react';
import ReactDOM from 'react-dom';
import Stepper from './Stepper';

describe('Month view', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Stepper label="test"/>, div);
  });
});