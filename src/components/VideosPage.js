import React from 'react';

const videos = [
    {
        src: 'https://player.vimeo.com/video/124858871',
        title: 'My Neighborhood',
        subtitle: 'Weekends on the Wine Dark Sea'
    },
    {
        src: 'https://www.youtube.com/embed/Aj45O-TVLMY',
        title: 'Roman Holiday',
        subtitle: 'A Walk in The Park'
    },
    {
        src: 'https://www.youtube.com/embed/t_GQX807QO8',
        title: 'Live Session',
        subtitle: 'Band reunion'
    },
    {
        src: 'https://www.youtube.com/embed/gic4uHPbdDo',
        title: 'Buy Something',
        subtitle: 'A Walk in The Park'
    }
];

class VideosPage extends React.Component {
    render() {
        return (
            <div id="videosPage" className="videos-page">
                <div className="videos-list">
                    {
                        videos.map((video, index) => {
                            return (
                                <div className="video" key={ `video-${index}` }>
                                    <div class="video-iframe">
                                        <iframe title={ video.title } src={ video.src }></iframe>
                                    </div>
                                    <div className="video-info">
                                        <span className="video-title">{ `[ ${video.title} ]` }</span>
                                        <span className="video-subtitle">{ `| ${video.subtitle}` }</span>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
                
            </div>
        );
    } 
}

export default VideosPage;