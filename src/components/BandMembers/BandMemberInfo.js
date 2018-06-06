import React from 'react';

const BandMemberInfo = ({ name, instrument, bio }) => (
    <div className="band-member-info">
        <h3>{ name }</h3>
        <span className="band-member-info-instrument">{ instrument }</span>
        <div className="band-member-info-bio">{ bio }</div>
    </div>
);

export default BandMemberInfo;
