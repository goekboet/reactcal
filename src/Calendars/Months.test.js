import months from './Months'

describe('Month calendar', () =>  {
  it('has the correct label', () => {
    const label = months(2017, 3).Label;
    expect(label).toBe("Mars 2017");
  });

  it('gives correct weekdays', () => {
    const weekDays = months(2017, 3).WeekDays;
    expect(weekDays).toEqual(["mån", "tis", "ons", "tor", "fre", "lör", "sön"]);
  });
  it('gives correct weeks', () => {
    const weeks = months(2017, 3).weeks;
    expect(weeks).toEqual(["v9", "v10", "v11", "v12", "v13"]);
  });
});

