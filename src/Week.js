import React from 'react';
import PropTypes from 'prop-types';
import Stepper from './Stepper';

const Week = (props) => {
    return (
    <div className="Week">
        <Stepper
            className="Label"
            label={props.label}
            previous={props.previousWeek}
            next={props.nextWeek} />
        <div className="Calendar">
            <table>
                <thead>
                <tr>
                    <th></th>
                    {props.weekdays.map(w => <th key={w}>{w}</th>)}
                </tr>
                </thead>
                <tbody>
                    {props.hours.map(h => <tr key={h}><td>{h}</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>)}
                </tbody>
            </table>
        </div>

    </div>)
}

Week.propTypes = {
    label: PropTypes.string.isRequired,
    weekdays: PropTypes.arrayOf(PropTypes.string),
    hours: PropTypes.arrayOf(PropTypes.string),
    previousWeek: PropTypes.func,
    nextWeek: PropTypes.func
}

export default Week;