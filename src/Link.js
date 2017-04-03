import React from 'react'

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
    text: React.PropTypes.string.isRequired,
    action: React.PropTypes.func
}

export default Link;