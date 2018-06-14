import React from 'react';
import AlbumTrack from './AlbumTrack';

const Album = ({ title, image, year, type, note, tracks }) => (
    <div className="album">
        <div className="album-image">
            <img src={ image } alt={ title }/>
        </div>
        <div className="album-info">
            <div className="album-title">{ `[ ${title} ]` }</div>
            <div className="album-meta">{ `${year} | ${type} | ${note}` }</div>
        </div>
        <div className="album-tracks">
        {
            tracks.map((track, index) => {
                return (
                    <AlbumTrack
                        key={ `album-track-${index}` }
                        title={ track.title }
                        index={ track.index }
                        audioUrl={ track.audioUrl }/>
                );
            })
        }    
        </div>
    </div>
);

export default Album;