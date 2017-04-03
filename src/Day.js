import React from 'react';
import './Day.css';

const Day = (props) =>
{
    const handleClick = f => {
        return e => {
            e.preventDefault();
            f();
        }
    }

    const belong = props.belongs ? " Belongs" : "";

    return (
    <div 
        className={["Day", belong].join("")} 
        onClick={handleClick(props.monthView)}>
        <p className="Date">{props.date}</p>
        <p className="WeekLabel">{props.week}</p>
    </div>);
};

Day.prototypes = {
    key: React.PropTypes.string,
    belongs: React.PropTypes.bool,
    week: React.PropTypes.string,
    date: React.PropTypes.string,
    monthView: React.PropTypes.func
}

export default Day;