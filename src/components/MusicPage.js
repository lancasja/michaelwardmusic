import React from 'react';
import Album from '../components/Album/Album';

import albumWeekendsOnTheDarkWineSea from '../assets/album-weekends-on-the-dark-wine-sea.jpg';
import albumAWalkInThePark from '../assets/album-a-walk-in-the-park.jpg';
import albumLateForTheTrain from '../assets/album-late-for-the-train.jpg';
import albumTheGoldenDemon from '../assets/album-the-golden-demon.jpg';
import albumWorkingForTheOnePercent from '../assets/album-working-for-the-one-percent.jpg';

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
                audioUrl: 'https://michaelwardmusic.nyc3.digitaloceanspaces.com/01-your-language.mp3'
            },
            {
                title: 'One Bright Night',
                index: 2,
                audioUrl: 'https://michaelwardmusic.nyc3.digitaloceanspaces.com/02-one-bright-night.mp3'
            },
            {
                title: 'Don\'t Talk About',
                index: 3,
                audioUrl: 'https://michaelwardmusic.nyc3.digitaloceanspaces.com/03-don-t-talk-about.mp3'
            },
            {
                title: 'Working For The One Percent',
                index: 4,
                audioUrl: 'https://michaelwardmusic.nyc3.digitaloceanspaces.com/04-working-for-the-one-percent.mp3'
            },
            {
                title: 'Engine Eddie',
                index: 5,
                audioUrl: 'https://michaelwardmusic.nyc3.digitaloceanspaces.com/05-engine-eddie.mp3'
            },
            {
                title: 'Taking My Time',
                index: 6,
                audioUrl: 'https://michaelwardmusic.nyc3.digitaloceanspaces.com/06-taking-my-time.mp3'
            },
            {
                title: 'The Pearl Gone By',
                index: 7,
                audioUrl: 'https://michaelwardmusic.nyc3.digitaloceanspaces.com/07-the-pearl.mp3'
            },
            {
                title: 'Bad Boys Rules',
                index: 8,
                audioUrl: 'https://michaelwardmusic.nyc3.digitaloceanspaces.com/08-bad-boy-rules.mp3'
            },
            {
                title: 'My Neighbourhood',
                index: 9,
                audioUrl: 'https://michaelwardmusic.nyc3.digitaloceanspaces.com/09-my-neighborhood.mp3'
            },
            {
                title: 'New Car Smell',
                index: 10,
                audioUrl: 'https://michaelwardmusic.nyc3.digitaloceanspaces.com/10-new-car-smell.mp3'
            },
            {
                title: 'Chicken Blood and Gin',
                index: 11,
                audioUrl: 'https://michaelwardmusic.nyc3.digitaloceanspaces.com/11-chicken-blood-and-gin.mp3'
            }
        ]
    },
    {
        title: 'Working For The One Percent',
        year: ' 2012',
        type: 'Single',
        image: albumWorkingForTheOnePercent,
        note: 'Produced by Michael Ward',
        tracks: [
            {
                title: 'Working For The One Percent',
                index: 1,
                audioUrl: 'https://michaelwardmusic.nyc3.digitaloceanspaces.com/04-working-for-the-one-percent.mp3'
            }
        ]
    },
    {
        title: 'A Walk In The Park',
        year: '2008',
        type: 'Album',
        image: albumAWalkInThePark,
        note: 'Produced by Michael Ward',
        tracks: [
            {
                title: 'A Walk In The Park',
                index: 1,
                audioUrl: 'https://michaelwardmusic.nyc3.digitaloceanspaces.com/02-one-bright-night.mp3'
            },
            {
                title: 'Worth The Wait',
                index: 2,
                audioUrl: 'https://michaelwardmusic.nyc3.digitaloceanspaces.com/02_worth-the-wait.mp3'
            },
            {
                title: 'Dress Up Day',
                index: 3,
                audioUrl: 'https://michaelwardmusic.nyc3.digitaloceanspaces.com/03_dress-up-day.mp3'
            },
            {
                title: 'Smackdown',
                index: 4,
                audioUrl: 'https://michaelwardmusic.nyc3.digitaloceanspaces.com/04_smackdown.mp3'
            },
            {
                title: 'Roman Holyday',
                index: 5,
                audioUrl: 'https://michaelwardmusic.nyc3.digitaloceanspaces.com/05_roman-holyday.mp3'
            },
            {
                title: 'Buy Something',
                index: 6,
                audioUrl: 'https://michaelwardmusic.nyc3.digitaloceanspaces.com/06_buy-something.mp3'
            },
            {
                title: 'That\'s Not News',
                index: 7,
                audioUrl: 'https://michaelwardmusic.nyc3.digitaloceanspaces.com/07_that-s-not-news.mp3'
            },
            {
                title: 'Snakebite',
                index: 8,
                audioUrl: 'https://michaelwardmusic.nyc3.digitaloceanspaces.com/08_snakebite.mp3'
            },
            {
                title: 'Something You Can Use',
                index: 9,
                audioUrl: 'https://michaelwardmusic.nyc3.digitaloceanspaces.com/09_something-you-can-use.mp3'
            },
            {
                title: 'Nothing Disappears',
                index: 10,
                audioUrl: 'https://michaelwardmusic.nyc3.digitaloceanspaces.com/10_nothing-disappears.mp3'
            },
            {
                title: 'Ma Mae',
                index: 11,
                audioUrl: 'https://michaelwardmusic.nyc3.digitaloceanspaces.com/11_ma-mae.mp3'
            },
            {
                title: 'God Through A Crack',
                index: 12,
                audioUrl: 'https://michaelwardmusic.nyc3.digitaloceanspaces.com/12_god-through-a-crack.mp3'
            },
            {
                title: 'The Ever Present Destination',
                index: 13,
                audioUrl: 'https://michaelwardmusic.nyc3.digitaloceanspaces.com/13_the-ever-present-destination.mp3'
            }
        ]
    },
    {
        title: 'Late For The Train',
        year: '2000',
        type: 'Album',
        image: albumLateForTheTrain,
        note: '',
        tracks: [
            {
                title: 'Never Too Late',
                index: 1,
                audioUrl: 'https://michaelwardmusic.nyc3.digitaloceanspaces.com/01_never-too-late.mp3'
            },
            {
                title: 'No Holydays (In The Food Chain)',
                index: 2,
                audioUrl: 'https://michaelwardmusic.nyc3.digitaloceanspaces.com/02_no-holydays-(in-the-food-chain).mp3'
            },
            {
                title: 'Watching The Pygmies',
                index: 3,
                audioUrl: 'https://michaelwardmusic.nyc3.digitaloceanspaces.com/03_watching-the-pygmies.mp3'
            },
            {
                title: 'My Friend',
                index: 4,
                audioUrl: 'https://michaelwardmusic.nyc3.digitaloceanspaces.com/04_my-friend.mp3'
            },
            {
                title: 'A Delicate Hand',
                index: 5,
                audioUrl: 'https://michaelwardmusic.nyc3.digitaloceanspaces.com/05_a-delicate-hand.mp3'
            },
            {
                title: 'A Thief In The Game',
                index: 6,
                audioUrl: 'https://michaelwardmusic.nyc3.digitaloceanspaces.com/06_a-thief-in-the-game.mp3'
            },
            {
                title: 'Zombie Love',
                index: 7,
                audioUrl: 'https://michaelwardmusic.nyc3.digitaloceanspaces.com/07_zombie-love.mp3'
            },
            {
                title: 'You Could Be Wrong',
                index: 8,
                audioUrl: 'https://michaelwardmusic.nyc3.digitaloceanspaces.com/08_you-could-be-wrong.mp3'
            },
            {
                title: 'Ghosts Of Sailors',
                index: 9,
                audioUrl: 'https://michaelwardmusic.nyc3.digitaloceanspaces.com/09_ghosts-of-sailors.mp3'
            },
            {
                title: 'Cheap Irony',
                index: 10,
                audioUrl: 'https://michaelwardmusic.nyc3.digitaloceanspaces.com/10_cheap-irony.mp3'
            }
        ]
    },
    {
        title: 'The Golden Demon',
        year: '2012',
        type: 'Album',
        image: albumTheGoldenDemon,
        note: 'HEMIFRAN',
        tracks: [
            {
                title: 'Donkey Island',
                index: 7,
                audioUrl: 'https://michaelwardmusic.nyc3.digitaloceanspaces.com/07_donkey-island.mp3'
            }
        ]
    }
];

class MusicPage extends React.Component {
    render() {
        return (
            <div id="musicPage" className="music-page">
                <div className="page-banner">Downloads now available on iTunes, Spotify, Tidal and more!</div>
                <div className="albums-list">
                {
                    albums.map((album, index) => {
                        return (
                            <Album key={ `album-${index}` }{ ...album }/>
                        );
                    })
                }
                </div>
            </div>
        );
    } 
}

export default MusicPage;