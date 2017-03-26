import React from 'react';

const Stepper = props => {
        return (
        <div className="Label">
        <a>◀</a>
        <h1>{props.label}</h1>
        <a>▶</a>
        </div>)
}

Stepper.propTypes = {
    label: React.PropTypes.string
}

export default Stepper;
