import React from 'react';

const BandMemberImage = ({ image, isThumbnail, onClick, selected }) => {

    const size = () => isThumbnail ? 100 : 285;
    
    return (
        <div
            className={ `band-member-image ${ selected ? 'selected' : ''}` }
            style={{
                width: `${size()}px`,
                height: `${size()}px`
            }}
            onClick={ onClick }>
            <img src={ image } alt="Band member"/>
        </div>
    );
};

export default BandMemberImage;
