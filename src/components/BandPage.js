import React from 'react';
import BandMember from './BandMembers/BandMember';
import BandMemberImage from './BandMembers/BandMemberImage';

// Images
import imagePrimaryMicahelWard from '../assets/michael-ward-primary.jpg';
import imageSecondaryMicahelWard from '../assets/michael-ward-secondary.jpg';
import imagePrimaryPrariePrince from '../assets/prairie-prince-primary.jpg';
import imageSecondaryPrariePrince from '../assets/prairie-prince-secondary.jpg';
import imagePrimaryChrisVonSneidern from '../assets/chris-von-sneidern-primary.jpg';
import imageSecondaryChrisVonSneidern from '../assets/chris-von-sneidern-secondary.jpg';
import imagePrimaryJeffCleland from '../assets/jeff-cleland-primary.jpg';
import imageSecondaryJeffCleland from '../assets/jeff-cleland-secondary.jpg';
import imagePrimaryFernandoDeSanjines from '../assets/fernando-de-sanjines-primary.jpg';
import imageSecondaryFernandoDeSanjines from '../assets/fernando-de-sanjines-secondary.jpg';
import imagePrimaryDrewZingg from '../assets/drew-zingg-primary.jpg';
import imagesSecondaryDrewZingg from '../assets/drew-zingg-secondary.jpg';
import imagesPrimaryRichardHowell from '../assets/richard-howell-primary.jpg';
import imagesSecondaryRichardHowell from '../assets/richard-howell-secondary.jpg';

// Data
const bandMemebers = [
    {
        images: {
            primary: imagePrimaryMicahelWard,
            secondary: imageSecondaryMicahelWard
        },
        name: 'Michael Ward',
        instrument: 'Vocals, Guitar',
        bio: <div>
            Michael Ward is a singer, songwriter, multi-instrumentalist, producer and owner of renowned Hyde Street Studios, living and working in the San Francisco Bay area since 1967. He has fronted many bands in that time which have been built around his unique singing, composition, and lyrical approach. The music blends elements of R&mp;B, Country, Folk and World Beat, emphasizing the distinctive narrative voice of the lyrics and supported by the rich instrumental interplay among the stellar line up of musicians , some of whom have been with the band forclose to twenty years. A deep familiarity with the material, and a fluid approach to the arrangements offer rich opportunities for improvisation and interplay while faithfully presenting the songs.
            <br/><br/>
            Michael’s production credits include projects with the BaAka pygmies of the Ituri Forest on their first trip to America, recording performances in the studio to be synchronized with live performances of Lines Ballet, as were performances by Pharaoh Sanders, Zakir Hussein and The Sacred Text Ensemble ; a collection of operettas by the Overtone Theater; rock bands the Potato Eaters and the Earthlings; composers Beth Custer, Joshua Brody and Olan Jones as well as producing and arranging all his own tracks.
            <br/><br/>
            The band’s latest album, Weekends on the Wine Dark Sea, and it’s latest singles, Mendacity and Working for the One Percent, have gotten substantial airplay in Europe. Videos of Mendacity and My Neighborhood and a variety of live performances can be accessed on YouTube and Vimeo as well as <a href="http://www.michaelwardmusic.com">michaelwardmusic.com</a>
            <br/><br/>
            Over the last year, the band has made two exciting additions that have dramatically supercharged the live ensemble experience. Brilliant saxophonist Richard Howell, who played on every record the band has made, has joined the live show , broadening the sonic possibilities and improvisational palate . Guitarist Drew Zingg, who amazed many as the guy who played live all the groundbreaking guitar parts when Steely Dan made their reunion tour, is also on board. The resulting chemical interaction with the existing group has made recent shows memorable events.
            </div>
    },
    {
        images: {
            primary: imagePrimaryPrariePrince,
            secondary: imageSecondaryPrariePrince
        },
        name: 'Prarie Prince',
        instrument: 'Drums, Percussion',
        bio: 'Founding and current member of The Tubes, founding member of Journey, has recorded and played live with Chris Isaak, Todd Rundgren, Brian Eno, David Byrne, XTC, Tom Waits, Paul Kantner, George Harrison, Dick Dale , Glenn Frey Richard Marx, John Fogerty and many more.'
    },
    {
        images: {
            primary: imagePrimaryChrisVonSneidern,
            secondary: imageSecondaryChrisVonSneidern
        },
        name: 'Chris Von Sneidern',
        instrument: 'Guitar, Vocals',
        bio: 'John Wesley Harding, Chuck Prophet, international tours with his own ensemble'
    },
    {
        images: {
            primary: imagePrimaryDrewZingg,
            secondary: imagesSecondaryDrewZingg
        },
        name: 'Drew Zingg',
        instrument: 'Guitar',
        bio: 'Steely Dan, Boz Skaggs, New York R&B Ensemble, Michael McDonald, Donald Fagan'
    },
    {
        images: {
            primary: imagePrimaryJeffCleland,
            secondary: imageSecondaryJeffCleland
        },
        name: 'Jeff Cleland',
        instrument: 'Bass',
        bio: 'Hop Sauce, Sister Moses, April Cope, Funky Little Shack.'
    },
    {
        images: {
            primary: imagePrimaryFernandoDeSanjines,
            secondary: imageSecondaryFernandoDeSanjines
        },
        name: 'Fernando De Sanjines',
        instrument: 'Drums, World Percussion',
        bio: 'Chalo Eduardo, Escola Nova, Samba do Coracao.'
    },
    {
        images: {
            primary: imagesPrimaryRichardHowell,
            secondary: imagesSecondaryRichardHowell
        },
        name: 'Richard Howell',
        instrument: 'Saxophones, Vocals',
        bio: 'Etta James, Taj Mahal, Earth Wind and Fire, many, many more. Signed by Lenny White to his label for a soon to be released album of Richard’s own band and material.'
    }
];

class BandPage extends React.Component {
    state = {
        selectedIndex: 0
    }

    updateSelectedIndex = (index) => this.setState({ selectedIndex: index });

    render() {
        const { selectedIndex } = this.state;

        return (
            <div id="bandPage" className="band-page">
                <BandMember
                    images={ bandMemebers[selectedIndex].images }
                    name={ bandMemebers[selectedIndex].name }
                    instrument={ bandMemebers[selectedIndex].instrument }
                    bio={ bandMemebers[selectedIndex].bio }/>

                <div className="band-members-thumbnails">
                {
                    bandMemebers.map((member, index) => {
                        return (
                            <div className="band-member-thumbnail" key={ `band-member-${index}` }>
                                <BandMemberImage
                                    image={ selectedIndex === index ? member.images.secondary : member.images.primary }
                                    isThumbnail
                                    selected={ selectedIndex === index }
                                    onClick={ () => this.updateSelectedIndex(index) }/>
                                <span className="thumbnail-name">{ member.name }</span>
                            </div>
                        );
                    })
                }
                </div>
            </div>
        );
    } 
}

export default BandPage;