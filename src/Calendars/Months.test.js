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
  it('gives correct days', () => {
    const days = months(2017, 3).days;
    expect(days).toEqual([
      {date: "27", belongs: false},
      {date: "28", belongs: false},
      {date: "1", belongs: true },
      {date: "2", belongs: true },
      {date: "3", belongs: true },
      {date: "4", belongs: true },
      {date: "5", belongs: true },
      {date: "6", belongs: true },
      {date: "7", belongs: true },
      {date: "8", belongs: true },
      {date: "9", belongs: true },
      {date: "10", belongs: true },
      {date: "11", belongs: true },
      {date: "12", belongs: true },
      {date: "13", belongs: true },
      {date: "14", belongs: true },
      {date: "15", belongs: true },
      {date: "16", belongs: true },
      {date: "17", belongs: true },
      {date: "18", belongs: true },
      {date: "19", belongs: true },
      {date: "20", belongs: true },
      {date: "21", belongs: true },
      {date: "22", belongs: true },
      {date: "23", belongs: true },
      {date: "24", belongs: true },
      {date: "25", belongs: true },
      {date: "26", belongs: true },
      {date: "27", belongs: true },
      {date: "28", belongs: true },
      {date: "29", belongs: true },
      {date: "30", belongs: true },
      {date: "31", belongs: true },
      {date: "1", belongs: false},
      {date: "2", belongs:false}
      ]);
  });
});
