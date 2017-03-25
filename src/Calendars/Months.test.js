import months from './Months'
import testdata from './Months.testdata';

describe('Month calendar', () => {
  it('has the correct label', () => {
    const label = months(2017, 2).label;
    expect(label).toBe(testdata.label);
  });

  it('gives correct weekdays', () => {
    const weekdays = months(2017, 3).weekdays;
    expect(weekdays).toEqual(testdata.weekdays);
  });
  
  it('gives correct weeks', () => {
    const weeks = months(2017, 2).weeks;
    expect(weeks).toEqual(testdata.weeks); 
  });
});
