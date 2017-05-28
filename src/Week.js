import React from 'react';
import PropTypes from 'prop-types';
import Link from './Link';
import Stepper from './Stepper'

const Week = (props) => {
    return (
    <div className="Week">
        <Stepper
            className="Label"
            label={props.label}
            previous={props.previousWeek}
            next={props.nextWeek} />
        <div className="Calendar">
            <div className="Header">
                {props.weekdays.map(wd =>
                    <div
                        key={wd}
                        className="Weekday">{wd}
                    </div>)}
            </div>
        </div>

    </div>)
}

Week.propTypes = {
    label: PropTypes.string.isRequired,
    weekdays: PropTypes.arrayOf(PropTypes.string),
    days: PropTypes.arrayOf(PropTypes.shape(
        {
            key: PropTypes.string.isRequired,
            hours: PropTypes.arrayOf(PropTypes.shape(
                { key: PropTypes.string.isRequired, label: PropTypes.string.isRequired}
            )).isRequired
        })),
    previousWeek: PropTypes.func,
    nextWeek: PropTypes.func
}

export default Week;