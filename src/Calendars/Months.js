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

const weekDays = begin => {
  let end = D.addDays(begin, 6);

  return D.eachDay(begin, end)
    .map(d => D.format(d, 'ddd'));
}

const Months = (year, month) =>
{
  let begin = D.startOfISOWeek(new Date(year, month));
  let end = D.addDays(begin, 34);
  let weeks = D.eachDay(begin, end).map(d =>
  { 
    return {
      key: D.format(d, 'YYYY-MM-DD'), 
      week: 'v' + D.getISOWeek(d),
      belongs: D.getMonth(d) === month,
      date: D.getDate(d).toString()
    }
  }).reduce(chunkBy(7, asWeek, addToWeek), []);

  return {
    label: MonthNames[month] + ' ' +  year,
    weekdays: weekDays(begin),
    weeks: weeks 
  }
}

export default Months;
