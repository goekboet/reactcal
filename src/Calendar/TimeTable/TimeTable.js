import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {
    return <thead><tr>{props.headers.map(x => <th key={x}>{x}</th>)}</tr></thead>
}

const Body = props => {
    return (
        <tbody>
            {props.body.map(x => {
                return <tr key={x.label}><td>{x.label}</td>{x.series.map(x => <td key={x.key}>{x.value}</td>)}</tr>
            })}
        </tbody>);
}

Header.propTypes = {
    headers: PropTypes.arrayOf(PropTypes.string)
}

Body.propTypes = {
    body: PropTypes.arrayOf(PropTypes.shape(
        { 
            label: PropTypes.string, 
            series: PropTypes.arrayOf(PropTypes.object)
        }))
}

export { Header, Body }