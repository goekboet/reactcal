import D from 'date-fns';
import _ from 'lodash';

const MonthLabel = date => D.format(date, 'MMMM YYYY');
const NextMonth = date => D.addMonths(date, 1);
const LastMonth = date => D.subMonths(date, 1);
const WeekLabel = date => D.format(date, '[v.]W MMMM YYYY');
const NextWeek = date => D.addWeeks(date, 1);
const LastWeek = date => D.subWeeks(date, 1);
const FirstOfMonth = date => D.setDate(date, 1);
const Headers = date => {
    const begin = D.startOfISOWeek(date);
    const end = D.addDays(begin, 6);

    return D.eachDay(begin, end).map(x => {
        return { date: x, label: D.format(x, 'ddd')}
    })
} 

const Hours = (headers) => { 
    let hours = _.range(0, 24).map(x => _.padStart(x, 2, '0') + ':00');
    let weekdays = headers.map(x => D.format(x.date, 'YYYY-MM-DD'));

    return hours.map(x => { return {label: x, series: weekdays.map(y => { return { key: y, value: ''}})}})
};

const Days = headers => {
    let dates = headers.map(x => x.date);
    return _.range(0, 6).map(x => { 
        return {label: D.format(D.addDays(dates[0], x * 7), '[v.]W'), series: dates.map(y => { 
            let d = D.addDays(y, 7 * x ); 
            return { key: D.format(d, 'YYYY-MM-DD'), value: D.format(d, 'D')}
        })}
    })
} 

export {MonthLabel, WeekLabel, NextMonth, LastMonth, NextWeek, LastWeek, Hours, Headers, FirstOfMonth, Days};