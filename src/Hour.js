import React from 'react';
import PropTypes from 'prop-types';

const Hour = (props) =>
{
    return (
    <div> 
        <p className="WeekLabel">{props.week}</p>
    </div>);
};

Hour.PropTypes = {
    key: PropTypes.string,
    label: PropTypes.string,
    monthView: PropTypes.func
}

export default Hour;