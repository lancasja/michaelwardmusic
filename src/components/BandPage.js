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
import imagePrimaryPaulRobinson from '../assets/paul-robinson-primary.jpg';
import imageSecondaryPaulRobinson from '../assets/paul-robinson-secondary.jpg';
import imagePrimaryJeffCleland from '../assets/jeff-cleland-primary.jpg';
import imageSecondaryJeffCleland from '../assets/jeff-cleland-secondary.jpg';
import imagePrimaryFernandoDeSanjines from '../assets/fernando-de-sanjines-primary.jpg';
import imageSecondaryFernandoDeSanjines from '../assets/fernando-de-sanjines-secondary.jpg';

// Data
const bandMemebers = [
    {
        images: {
            primary: imagePrimaryMicahelWard,
            secondary: imageSecondaryMicahelWard
        },
        name: 'Michael Ward',
        instrument: 'Vocals, Guitar',
        bio: 'is a singer, songwriter, multi-instrumentalist, producer and studio owner living and working in the San Francisco Bay Area since 1974. He has fronted many bands in that time, which have been built around his unique singing, composition and lyrical approach. The music blends elements of R&B, country and world music into a rhythmic stew with a distinctive narrative voice. At various times his group has featured members of such luminary bands such as Frank Zappa, Ambrosia, Etta James, George Clinton, Bruce Hornsby and Steve Miller...'
    },
    {
        images: {
            primary: imagePrimaryPrariePrince,
            secondary: imageSecondaryPrariePrince
        },
        name: 'Prarie Prince',
        instrument: 'Drums, Percussion',
        bio: 'A member of The Tubes and a founding member of Journey. He has also worked with Chris Isaak, Todd Rundgren, Brian Eno, David Byrne, XTC, Tom Waits, Paul Kantner, George Harrison, Dick Dale, Glenn Frey, Richard Marx, Bill Spooner, Neil Hamburger, John Fogerty, Tommy Bolin, Phil Lesh, Vince Welnick, and The Next Generation of Jefferson Starship.'
    },
    {
        images: {
            primary: imagePrimaryChrisVonSneidern,
            secondary: imageSecondaryChrisVonSneidern
        },
        name: 'Chris Von Sneidern',
        instrument: 'Guitar, Vocals',
        bio: 'John Wesley Harding, international tours with his own ensemble.'
    },
    {
        images: {
            primary: imagePrimaryPaulRobinson,
            secondary: imageSecondaryPaulRobinson
        },
        name: 'Paul Robinson',
        instrument: 'Guitar, Vocals',
        bio: 'Al Stewart, Hot Club of San Francisco, David Sanborn, Dan Hicks.'
    },
    {
        images: {
            primary: imagePrimaryJeffCleland,
            secondary: imageSecondaryJeffCleland
        },
        name: 'Jeff Cleland',
        instrument: 'Bass',
        bio: 'Sister Moses, April Cope, Lucy Stoner, Funky Little Shack.'
    },
    {
        images: {
            primary: imagePrimaryFernandoDeSanjines,
            secondary: imageSecondaryFernandoDeSanjines
        },
        name: 'Fernando De Sanjines',
        instrument: 'Drums, World Percussion',
        bio: 'Chalo Eduado, Escola Nova, Samba do Coracao.'
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