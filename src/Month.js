import React from 'react';
import PropTypes from 'prop-types';
import Day from './Day';
import './Month.css';
import Stepper from './Stepper';

const Month = (props) =>
{
    return (
    <div className="Month">
        <Stepper 
            className="Label"
            label={props.label}
            previous={props.previousMonth}
            next={props.nextMonth} />
        <div className="Calendar">
            <div className="Header">
                {props.weekdays.map(wd => 
                    <div 
                        key={wd} 
                        className="Weekday">{wd}
                    </div>)}
            </div>
            {props.weeks.map(w => 
            <div key={w.key} className="Week">
                {w.days.map(d => <Day 
                    key={d.key} 
                    belongs={d.belongs} 
                    week={d.week} 
                    date={d.date}
                    monthView={props.weekview(d.key, "week")}/>)}
            </div>
            )}
        </div>
    </div>);
};

Month.PropTypes = {
    label: PropTypes.string,
    weeks: PropTypes.arrayOf(PropTypes.object),
    weekview: PropTypes.func,
    weekdays: PropTypes.arrayOf(PropTypes.string),
    previosMonth: PropTypes.func,
    nextMonth: PropTypes.func
}

export default Month;