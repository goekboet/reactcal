import moment from 'moment';

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

const weekDays = [
  "mån",
  "tis",
  "ons",
  "tor",
  "fre",
  "lör",
  "sön"
];

const Months = (year, month) =>
{
  var calendarDay  = moment([year, month - 1]);
  var firstWeek = calendarDay.format('W');

  var days = [];
  var weeks = [];

  while (calendarDay.format('W') === firstWeek)  
    calendarDay.hour(-24); 
  calendarDay.hour(24);

  var calendarWeek = moment(calendarDay);
  for (var i = 0; i < 5; i++) {
    weeks.push('v' + calendarWeek.format('W'));
    calendarWeek.hour(24 * 7);
  }

  for(var j = 0; j < (7 * 5); j++) { 
    days.push(
      { date: calendarDay.format('D'),
        belongs: calendarDay.month() === (month - 1) }
    );
    calendarDay.hour(24);
  }


  return {
    Label: MonthNames[month - 1] + ' ' +  year,
    WeekDays: weekDays,
    weeks: weeks, 
    days: days
  }
}

export default Months;