import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        activeItem: 0
      }
    }
  
    handleTap(index) {
      this.setState({
        activeItem: index
      });
    }
  
    render() {
      const { items } = this.props;
      const { activeItem } = this.state;
  
      return (
        <div className="nav-bar">
          <ul>
          {
            items.map((item, index) => {
              return (
                <li
                  className={ `nav-bar--item ${ activeItem === index ? 'active' : '' }` }
                  key={ index }
                  onClick={ () => this.handleTap(index) }>
  
                  <Link to={ item.to }>{ item.label }</Link>
  
                </li>
              );
            })
          }
          </ul>
        </div>
      );
    }
  }

  export default NavBar;
