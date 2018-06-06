import React from 'react';
import BandMemberImage from './BandMemberImage';
import BandMemberInfo from './BandMemberInfo';

const BandMember = ({ images, name, instrument, bio }) => (
    <div className="band-member">
        <BandMemberImage image={ images.primary }/>
        <BandMemberInfo
            name={ name }
            instrument={ instrument }
            bio={ bio }/>
    </div>
);

export default BandMember;