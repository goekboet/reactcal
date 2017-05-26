import React from 'react';
import PropTypes from 'prop-types';
import Link from './Link';
import './Stepper.css';

const Stepper = props => {
    return (
        <div className={props.className}>
            <Link text="◀" action={props.previous} />
            <Link text={props.label} action={props.current} />
            <Link text="▶" action={props.next} />
        </div>)
}

Stepper.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    current: PropTypes.func,
    previous: PropTypes.func,
    next: PropTypes.func
}

export default Stepper;
