import React from 'react';

const AlbumTrack = ({ title, index, audioUrl }) => (
    <div className="album-track">
        <audio
            controls
            controlsList="nodownload"
            src={ audioUrl }>
            Your browser does not support the audio element.
        </audio>
        <div className="album-track-info">
            <span className="album-track-number">{ index }</span>
            <span className="album-track-title">{ title }</span>
        </div>
    </div>
);

export default AlbumTrack;
