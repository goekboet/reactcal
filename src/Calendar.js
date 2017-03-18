import React from 'react';
import './Calendar.css';

const Calendar = (props) =>
{
    return (
    <div className="Calendar">
        <h1>{props.label}</h1>
        <div className="dayHeaders">
            {props.days.map((day, index) => 
                <div 
                    className={(day.belongs ? "belong" : "") + " Cell"} 
                    key={(index + 1).toString()}>
                    {day.date}
                </div>
            )
            }
        </div>
    </div>);
};

export default Calendar;