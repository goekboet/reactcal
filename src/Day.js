import React from 'react';
import './Day.css';

const Day = (props) =>
{
    const belong = props.belongs ? " Belongs" : "";

    return (
    <div className={["Day", belong].join("")}>
        <p className="Date">{props.date}</p>
        <p className="WeekLabel">{props.week}</p>
    </div>);
};

export default Day;