import React from 'react';

import homeImage from '../assets/michael-ward-promo-photo.jpg';

class HomePage extends React.Component {
  render() {

    return (
      <div className="home-page">
        <div
          style={{
              border: '1px solid #fff',
              overflow: 'hidden',
              // backgroundImage: `url('${homeImage}')`,
              // backgroundSize: 'cover',
              // backgroundPosition: 'center',
              // backgroundRepeat: 'no-repeat'
            }}>
          <img src={ homeImage } alt="Artistic shot of the band"/>
        </div>
      </div>
    );
  } 
}

export default HomePage;