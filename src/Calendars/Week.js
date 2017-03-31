import D from 'date-fns';

const Days = (first, last) => D.eachDay(first, last).map(day => {
    return { key: D.format(day, 'YYYY-MM-DD'), hours: [] };
});

const Week = (date) => 
{
    const first = D.startOfISOWeek(date);
    const last = D.addDays(first, 6);

    return { days: Days(first, last)};
};

export default Week;