import D from 'date-fns';
import _ from 'lodash';

const Consecutive = (x) => _.range(1, x + 1).map(n => {
    return { key: (n % x).toString(), label: (n % x).toString()}
});

const Days = (first, last) => D.eachDay(first, last).map(day => {
    return { key: D.format(day, 'YYYY-MM-DD'), hours: Consecutive(24) };
});

const Title = (date) =>
{
    return "v. " + D.format(date, 'W, MMMM YYYY');
}

const Month = (date) =>
{
    return D.format(date, "YYYY-MM");
}

const Week = (date) => 
{
    const first = D.startOfISOWeek(date);
    const last = D.addDays(first, 6);

    return { 
        title: Title(date),
        month: Month(date),
        days: Days(first, last)};
};

export default Week;