import React from 'react';

import homeImage from '../assets/michael-ward-home.jpg';

class HomePage extends React.Component {
  render() {

    return (
      <div className="home-page">
        <div
          style={{
              border: '1px solid #fff',
              overflow: 'hidden'
            }}>
          <img src={ homeImage } alt="Artistic shot of the band"/>
        </div>
      </div>
    );
  } 
}

export default HomePage;