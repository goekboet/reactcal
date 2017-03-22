import React from 'react';
import Day from './Day';
import './Month.css';

const Month = (props) =>
{
    return (
    <div className="Month">
        <h1>{props.label}</h1>
        <div className="Calendar">
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

export default Month;