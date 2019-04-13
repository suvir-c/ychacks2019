import React from 'react';

import SideNavigation from 'components/SideNavigation';
import Button from 'components/Button';

class ContactPage extends React.Component {
  state = {
    message: '',
  };

  handleSubmitReportClick = () => {};

  sendTextMessage = () => {
    alert(
      'Send message button clicked! Implement this function in the code here.',
    );
  };

  render() {
    return (
      <div className="page-wrapper-sidebar contact-page">
        <SideNavigation />
        <div className="page-body">
          <h1>Contacts</h1>
          <p className="body-text">
            This is a template for creating short forms in card view. This
            example shows how you could create contact cards and send messages
            to other users.
          </p>
          <div className="contacts-list">
            <div className="card card-long">
              <div>
                <h3>Mom</h3>
                <p>+123 456 7890</p>
                <p>Send a text to your mom.</p>
              </div>
              <input
                placeholder="Enter Message"
                type="text"
                value={this.state.message}
                onChange={e => this.setState({ message: e.target.value })}
              />
              <Button title="Let's Talk" onClick={this.sendTextMessage} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactPage;
