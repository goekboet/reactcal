import D from 'date-fns';

const chunkBy = (n, identify, insert) => {
  return (acc, e, i) => {
    const chunk = Math.floor(i/n);
    acc[chunk] = (acc[chunk] || identify(e));
    insert(acc[chunk], e);

    return acc;
  }
}

const asWeek = e => {
  return { key: D.format(D.parse(e.key), "YYYY-W"), days:[]}
}

const addToWeek = (week, day) => week.days.push(day)

const MonthNames = [
  "Januari",
  "Februari",
  "Mars",
  "April",
  "Maj",
  "Juni",
  "Juli",
  "Augusti",
  "September",
  "Oktober",
  "November",
  "December"
];

const weekDays = date => {
  const begin = D.startOfISOWeek(date);
  const end = D.addDays(begin, 6);

  return D.eachDay(begin, end)
    .map(d => D.format(d, 'ddd'));
}

const Months = (date) =>
{
  const first = D.startOfISOWeek(D.startOfMonth(date));
  const currentMonth = D.getMonth(date);
  const currentYear = D.getYear(date);
  
  const last = D.addDays(first, 34);
  const weeks = D.eachDay(first, last).map(d =>
  { 
    return {
      key: D.format(d, 'YYYY-MM-DD'), 
      week: 'v' + D.getISOWeek(d),
      belongs: D.getMonth(d) === currentMonth,
      date: D.getDate(d).toString()
    }
  }).reduce(chunkBy(7, asWeek, addToWeek), []);

  return {
    label: MonthNames[currentMonth] + ' ' +  currentYear,
    weekdays: weekDays(date),
    weeks: weeks 
  }
}

export default Months;
