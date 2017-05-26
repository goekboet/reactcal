import React from 'react'
import PropTypes from 'prop-types';

const Link = props => {
    const handleClick = f => {
        return e => {
            e.preventDefault();
            f();
        }
    }
    return (<a href="#" onClick={handleClick(props.action)} >{props.text}</a>);
}

Link.propTypes = {
    text: PropTypes.string.isRequired,
    action: PropTypes.func
}

export default Link;