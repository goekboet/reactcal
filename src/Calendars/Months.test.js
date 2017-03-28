import months from './Months'
import testdata from './Months.testdata';

describe('Month calendar', () => {
  const refDate = new Date(2017, 2, 30)
  it('has the correct label', () => {
    const label = months(refDate).label;
    expect(label).toBe(testdata.label);
  });

  it('gives correct weekdays', () => {
    const weekdays = months(refDate).weekdays;
    expect(weekdays).toEqual(testdata.weekdays);
  });
  
  it('gives correct weeks', () => {
    const weeks = months(refDate).weeks;
    expect(weeks).toEqual(testdata.weeks); 
  });
});
