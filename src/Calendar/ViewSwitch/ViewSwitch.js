import React from 'react';
import Types from 'prop-types';

const ViewSwitch = props => {
    return (
        <div className={props.className}>
            <span>
            {
                props.views.map(x => 
                {
                    return (
                        <button key={x.view} {...(x.current && {disabled: true}) } onClick={props.switch(x.view)}>
                            {x.view}
                        </button>)
                })
            }
            </span>
        </div>
    )
}

ViewSwitch.propTypes = {
    className: Types.string,
    views: Types.arrayOf(Types.shape({ view: Types.string, current: Types.bool})),
    switch: Types.func
}

export default ViewSwitch;