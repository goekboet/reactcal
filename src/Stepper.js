import React from 'react';
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
    className: React.PropTypes.string,
    label: React.PropTypes.string,
    current: React.PropTypes.func,
    previous: React.PropTypes.func,
    next: React.PropTypes.func
}

export default Stepper;
