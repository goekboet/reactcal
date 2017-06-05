import React from 'react';
import Types from 'prop-types';

const Navigator = props => {
    return(
        <div className={props.className}>
            <button onClick={props.last}>◀</button>
            <button onClick={props.now}>{props.currentViewLabel}</button>
            <button onClick={props.next}>▶</button>
        </div>
    )
}

Navigator.propTypes = {
    className: Types.string,
    currentViewLabel: Types.string,
    now: Types.func,
    last: Types.func,
    next: Types.func
}

export default Navigator;