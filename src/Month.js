import React from 'react';
import Day from './Day';
import './Month.css';

const Month = (props) =>
{
    return (
    <div className="Month">
        <h1>{props.label}</h1>
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
                    date={d.date}/>)}
            </div>
            )}
        </div>
    </div>);
};

Month.propTypes = {
    label: React.PropTypes.string,
    weeks: React.PropTypes.arrayOf(React.PropTypes.object),
    weekdays: React.PropTypes.arrayOf(React.PropTypes.string)
}

export default Month;