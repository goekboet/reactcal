import React from 'react';
import PropTypes from 'prop-types';
import Link from './Link';

const Week = (props) => {
    return (<Link text="hello" action={props.monthView} />)
}

Week.propTypes = {
    label: PropTypes.string.isRequired,
    days: PropTypes.arrayOf(PropTypes.shape(
        {
            key: PropTypes.string.isRequired,
            hours: PropTypes.arrayOf(PropTypes.shape(
                { key: PropTypes.string.isRequired, label: PropTypes.string.isRequired}
            )).isRequired
        }))
}

export default Week;