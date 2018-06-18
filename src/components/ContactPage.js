import React from 'react';

class ContactPage extends React.Component {
    render() {
        return (
            <div id="contactPage" className="contact-page">
                <div className="contact-info">
                    <div className="address">
                        <div>245 Hyde Street</div>
                        <div>San Francisco, CA 94102</div>
                    </div>
                    <div className="phone-numbers">
                        <div>
                            <a href="tel:(415)441-8934">(415) 441 - 8934</a>
                            <span>Studio</span>
                        </div>
                        <div>
                            <a href="tel:(415)441-8934">(415) 441 - 8943</a>
                            <span>Fax</span>
                        </div>
                    </div>
                    <div>
                        <a href="mailto:info@hydestreet.com">info@hydestreet.com</a>
                    </div>
                </div>
            </div>
        );
    } 
}

export default ContactPage;