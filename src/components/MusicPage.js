import React from 'react';

import albumWeekendsOnTheDarkWineSea from '../assets/album-weekends-on-the-dark-wine-sea.jpg';
// import albumAWalkInThePark from '../assets/album-a-walk-in-the-park.jpg';
// import albumLateForTheTrain from '../assets/album-late-for-the-train.jpg';
// import albumTheGoldenDemon from '../assets/album-the-golden-demon.jpg';
// import albumWorkingForTheOnePercent from '../assets/album-working-for-the-one-percent.jpg';

const albums = [
    {
        title: 'Weekends on the Wine Dark Sea',
        year: '2013',
        type: 'Album',
        image: albumWeekendsOnTheDarkWineSea,
        note: 'Produced by Michael Ward',
        tracks: [
            {
                title: 'Your Language',
                index: 1,
                audioUrl: 'http://dg7mo79fc5sh8.cloudfront.net/01-your-language.mp3'
            },
            {
                title: 'One Bright Night',
                index: 2,
                audioUrl: 'https://s3-us-west-2.amazonaws.com/michaelwardmusic/audio/02-one-bright-night.mp3'
            },
            {
                title: 'Don\'t Talk About',
                index: 3,
                audioUrl: 'https://s3-us-west-2.amazonaws.com/michaelwardmusic/audio/03-don-t-talk-about.mp3'
            },
            {
                title: 'Working For The One Percent',
                index: 4,
                audioUrl: 'https://s3-us-west-2.amazonaws.com/michaelwardmusic/audio/04-working-for-the-one-percent.mp3'
            },
            {
                title: 'Engine Eddie',
                index: 5,
                audioUrl: 'https://s3-us-west-2.amazonaws.com/michaelwardmusic/audio/05-engine-eddie.mp3'
            },
            {
                title: 'Taking My Time',
                index: 6,
                audioUrl: 'https://s3-us-west-2.amazonaws.com/michaelwardmusic/audio/06-taking-my-time.mp3'
            },
            {
                title: 'The Pearl Gone By',
                index: 7,
                audioUrl: 'https://s3-us-west-2.amazonaws.com/michaelwardmusic/audio/07-the-pearl.mp3'
            },
            {
                title: 'Bad Boys Rules',
                index: 8,
                audioUrl: 'https://s3-us-west-2.amazonaws.com/michaelwardmusic/audio/08-bad-boy-rules.mp3'
            },
            {
                title: 'My Neighbourhood',
                index: 9,
                audioUrl: 'https://s3-us-west-2.amazonaws.com/michaelwardmusic/audio/09-my-neighborhood.mp3'
            },
            {
                title: 'New Car Smell',
                index: 10,
                audioUrl: 'https://s3-us-west-2.amazonaws.com/michaelwardmusic/audio/10-new-car-smell.mp3'
            },
            {
                title: 'Chicken Blood and Gin',
                index: 11,
                audioUrl: 'https://s3-us-west-2.amazonaws.com/michaelwardmusic/audio/11-chicken-blood-and-gin.mp3'
            }
        ]
    },
    {
        title: '',
        year: '',
        type: '',
        image: null,
        note: '',
        tracks: [
            {
                title: '',
                index: 0,
                audio: null
            }
        ]
    }
];

class Transport extends React.Component {
    render () {
        return (
            <div>This will be a transport bar...</div>
        );
    }
}

const AlbumTrack = ({ title, index, audioUrl }) => (
    <div className="album-track">
        <Transport audio={ audioUrl }/>
        <span className="album-track-index">{ index }</span>
        <span className="album-track-number">{ title }</span>
    </div>
);

const Album = ({ title, image, year, type, note, tracks }) => (
    <div className="album">
        <div className="album-image">
            <img src={ image } alt={ title }/>
        </div>
        <div className="album-info">
            { `${year} | ${type} | ${note}` }
        </div>
        <div className="album-tracks">
        {
            tracks.map((track, index) => {
                return (
                    <AlbumTrack
                        title={ track.title }
                        index={ track.index }
                        audioUrl={ track.audioUrl }/>
                );
            })
        }    
        </div>
    </div>
);

class MusicPage extends React.Component {
    render() {
        return (
            <div id="musicPage" className="music-page">
                <div className="page-banner">Downloads now available on iTunes, Spotify, Tidal and more!</div>
                <div className="albums-list">
                {
                    albums.map((album, index) => {
                        return (
                            <Album { ...album }/>
                        );
                    })
                }
                </div>
            </div>
        );
    } 
}

export default MusicPage;