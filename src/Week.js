import React from 'react';
import Link from './Link';

const Week = (props) => {
    return (<Link text="hello" action={props.monthView} />)
}

Week.propTypes = {
    label: React.PropTypes.string.isRequired,
    month: React.PropTypes.string.isRequired,
    days: React.PropTypes.arrayOf(React.PropTypes.shape(
        {
            key: React.PropTypes.string.isRequired,
            hours: React.PropTypes.arrayOf(React.PropTypes.string.isRequired).isRequired
        })),
    monthView: React.PropTypes.func.isRequired
}

export default Week;