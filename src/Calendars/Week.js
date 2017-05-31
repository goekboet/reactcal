import D from 'date-fns';
import _ from 'lodash';

const Title = (date) =>
{
    return "v. " + D.format(date, 'W, MMMM YYYY');
}

const Hours = _.range(0, 24).map(x => _.padStart(x, 2, '0') + ':00');

const Week = (date) => 
{
    const first = D.startOfISOWeek(date);
    const last = D.addDays(first, 6);

    return { 
        title: Title(date),
        weekdays: Weekdays(first, last),
        hours: Hours
    };
};

const Weekdays = (from, to) => 
{
    return D.eachDay(from, to).map(x => D.format(x, "ddd"));
}

export default Week;