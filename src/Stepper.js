import React from 'react';
import './Stepper.css';

const Stepper = props => {
    const handleEvent = f => {
        return e => {
            e.preventDefault();
            f();
        }
    }
        return (
        <div className="Label">
        <a href="#" onClick={handleEvent(props.previous)}>◀</a>
        <h1>{props.label}</h1>
        <a href="#" onClick={handleEvent(props.next)}>▶</a>
        </div>)
}

Stepper.propTypes = {
    label: React.PropTypes.string,
    previous: React.PropTypes.func,
    next: React.PropTypes.func
}

export default Stepper;
