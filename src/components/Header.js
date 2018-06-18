import React from 'react';

import facebookIcon from '../assets/facebook-icon.svg';
import soundcloudIcon from '../assets/soundcloud-icon.svg';
import youtubeIcon from '../assets/yt-icon.svg';
import SocialLinks from './SocialLinks';

const Header = ({ logo, subtitle }) => (
    <div className="top-bar">
      <div className="site-header">
        <img className="header-logo" src={ logo } alt="Michael Ward"/>
        <span className="subtitle">{ subtitle }</span>
      </div>
  
      <SocialLinks items={[
        {
          name: 'facebook',
          icon: facebookIcon,
          width: 16,
          height: 30,
          url: 'https://www.facebook.com/michaelwardwithdogsandfishes/'
        },
        {
          name: 'soundcloud',
          icon: soundcloudIcon,
          width: 36,
          height: 21,
          url: 'https://soundcloud.com/michaelwardmusic'
        },
        {
          name: 'youtube',
          icon: youtubeIcon,
          width: 30,
          height: 23,
          url: 'https://www.youtube.com/channel/UCH5NEEMhgNXfi4X8aGQmdIQ'
        }
      ]}/>
    </div>
  );

  export default Header;