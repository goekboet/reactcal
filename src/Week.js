import React from 'react';
import Link from './Link';

const Week = (props) => {
    return(<Link text="Hello" action={props.monthView} />)
}

Week.propTypes = {
    monthView: React.PropTypes.func
}

export default Week;