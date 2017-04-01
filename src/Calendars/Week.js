import D from 'date-fns';

const Days = (first, last) => D.eachDay(first, last).map(day => {
    return { key: D.format(day, 'YYYY-MM-DD'), hours: Consecutive(24) };
});

const Consecutive = (x) => [...Array(x).keys()].map(i => i.toString())

const Title = (date) =>
{
    return "vecka " + D.format(date, 'W');
}

const Week = (date) => 
{
    const first = D.startOfISOWeek(date);
    const last = D.addDays(first, 6);

    return { 
        title: Title(date), 
        days: Days(first, last)};
};

export default Week;