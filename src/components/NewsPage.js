import React from 'react';
import UpcomingEvents from './UpcomingEvents/UpcomingEvents';
import penaCenterPoster from '../assets/pena-center-poster.jpg';

const EVENTS = [
  {
    title: 'Peña Pachamama Center',
    date: {
      day: '17',
      month: 'Jun'
    },
    time: '7:00pm - 9:00pm (Acoustic Set)',
    mapLink: 'https://maps.google.com/',
    address: {
        street: '1630 Powell St. (between Union & Green)',
        city: 'San Francisco, CA',
        phone: '(415)646-0018',
        website: ''
    },
    notes: [
        {
            title: 'Suggested Parking',
            text: 'Vallejo Street Garage on Vallejo at Powell (just 2 blocks away and reasonably priced).'
        }
    ],
    image: penaCenterPoster
  }
];

class NewsPage extends React.Component {
  render() {
    return (
      <div className="news-page">
        
        <UpcomingEvents newsItems={ EVENTS }/>

      </div>
    );
  } 
}

export default NewsPage;