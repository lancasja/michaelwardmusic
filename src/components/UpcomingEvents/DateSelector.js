import React from 'react';

const DateSelector = ({ day, month, selected, onClick }) => (
    <div
        className={ `date-selector ${selected ? 'selected' : ''}` }
        onClick={ onClick }>
        
        <div>{ day }</div>
        <div>{ month }</div>
    </div>
);

export default DateSelector;