import React from 'react';

const EventNote = ({ title, text }) => (
    <div className="event-notes--note">
        <h5 className="note-title">{ title }</h5>
        <p className="note-text">{ text }</p>
    </div>
);

const Event = ({ title, time, mapLink, address, notes, image }) => (
    <div className="upcoming-events--event">
        <div className="event-info">
            <h4 className="event-title">{ title }</h4>
            <span className="event-time">{ time }</span>
            <a className="event-location" href={ mapLink } target="_blank">
                <span className="event-location--street">{ address.street }</span>
                <span className="event-location--city">{ address.city }</span>
            </a>
            <a className="event-location--phone" href={ `tel:${ address.phone }` }>{ address.phone }</a>
            <div className="event-notes">
                {
                    notes.map((note, index) => <EventNote title={ note.title } text={ note.text }/>)
                }
            </div>
        </div>
        <div className="event-image">
            <img src={ image } alt=""/>
        </div>
    </div>
);

export default Event;