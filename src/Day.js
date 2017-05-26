import React from 'react';
import PropTypes from 'prop-types';
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

Day.PropTypes = {
    key: PropTypes.string,
    belongs: PropTypes.bool,
    week: PropTypes.string,
    date: PropTypes.string,
    monthView: PropTypes.func
}

export default Day;