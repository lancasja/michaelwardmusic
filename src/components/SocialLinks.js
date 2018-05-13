import React from 'react';

class SocialLinks extends React.Component {
    render() {
        const { items } = this.props;
      
        return (
            <div className="social-links">
                <ul>
                {
                    items.map((item, index) => {
                        return (
                            <li className={ `social-item social-item--${ item.name }` } key={ index }>
                                <a>
                                    <img src={ item.icon } width={ item.width } height={ item.height }  alt="Social Media Logo"/>
                                </a>
                            </li>
                        );
                    })
                }
          </ul>
        </div>
      );
    }
  }

  export default SocialLinks;
