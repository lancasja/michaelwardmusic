import React from 'react';
import DateSelector from './DateSelector';
import Event from './Event';

class UpcomingEvents extends React.Component {
    state = {
      currentIndex: 0
    }

    updateIndex(currentIndex) {
      this.setState({ currentIndex });
    }

    render() {
        return (
            <div className="upcoming-events">
                <div className="nav-dates">
                  {
                    this.props.newsItems.map((newsItem, index) => {
                      return (
                        <DateSelector
                          key={ index }
                          day={ newsItem.date.day }
                          month={ newsItem.date.month }
                          onClick={ () => this.updateIndex(index) }
                          selected={ this.state.currentIndex === index }/>
                      );
                    })
                  }
                </div>
                <div className="content">
                  <Event
                    title={ this.props.newsItems[this.state.currentIndex].title }
                    time={ this.props.newsItems[this.state.currentIndex].time }
                    mapLink={ this.props.newsItems[this.state.currentIndex].mapLink }
                    address={ this.props.newsItems[this.state.currentIndex].address }
                    notes={ this.props.newsItems[this.state.currentIndex].notes }
                    image={ this.props.newsItems[this.state.currentIndex].image }/>
                </div>
            </div>
        );
    }
};

export default UpcomingEvents;