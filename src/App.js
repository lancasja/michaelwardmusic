import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Header from './components/Header';
import HomePage from './components/HomePage';
import NewsPage from './components/NewsPage';
import BandPage from './components/BandPage';
import MusicPage from './components/MusicPage';
import VideosPage from './components/VideosPage';
import ContactPage from './components/ContactPage';

import './App.css';

import logo from './assets/michael-ward-logo.svg';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {/* Left - Rail */}
          <div>
            <NavBar items={[
              {
                label: 'Home',
                to: '/'
              },
              {
                label: 'News',
                to: '/news'
              },
              {
                label: 'The Band',
                to: '/band'
              },
              {
                label: 'Music',
                to: '/music'
              },
              {
                label: 'Videos',
                to: '/videos'
              },
              {
                label: 'Contact',
                to: '/contact'
              }
            ]}/>
          </div>
          
          {/* Right - Content */}
          <div style={{
            padding: '0 10px 0 0px',
            width: '100%'
          }}>
            <Header logo={ logo } subtitle="with Dogs and Fishes"/>

            <Route exact path="/" component={ HomePage }/>
            <Route exact path="/news" component={ NewsPage }/>
            <Route exact path="/band" component={ BandPage }/>
            <Route exact path="/music" component={ MusicPage }/>
            <Route exact path="/videos" component={ VideosPage }/>
            <Route exact path="/contact" component={ ContactPage }/>
          </div>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
