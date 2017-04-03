import React from 'react';
import ReactDOM from 'react-dom';
import Month from './Month';
import renderer from 'react-test-renderer';
import testdata from './Calendars/Months.testdata';

describe('Month view', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Month label="test" weeks={[]} weekdays={[]} />, div);
  });

  it('matches snapshot', () => {
    const tree = renderer.create(
      <Month 
        label={testdata.label} 
        weeks={testdata.weeks}
        weekview={(a, b) => () => undefined} 
        weekdays={testdata.weekdays} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  })
});

