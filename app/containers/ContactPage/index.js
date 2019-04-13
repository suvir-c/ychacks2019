import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import SideNavigation from 'components/SideNavigation';
import Button from 'components/Button';

import { submitOnlineForm } from '../../stores/form/actions';

import './styles.scss';

class ContactPage extends React.Component {
  state = {
    streetAddress: '',
    city: '',
    state: '',
    zip: '',
    email: '',
    isAboutBill: 'yes',
    procon: '',
    issue: '',
    issues: '',
    details: '',
  };

  handleSendClick = () => {
    console.log('handling click');
    const formData = {
      address: this.state.streetAddress,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
      email: this.state.email,
      procon: this.state.procon,
      issue: this.state.issue,
      issues: this.state.issues,
      details: this.state.details,
    };
    console.log('formData', formData);
    this.props.submitOnlineForm(formData);
  };

  render() {
    console.log('props', this.props);
    const { isAboutBill } = this.state;
    return (
      <div className="page-wrapper-sidebar">
        <SideNavigation />
        <div className="page-body">
          <div className="form-wrapper">
            <h1>Contact Your Representative</h1>
            <p className="input-label">What is your address?</p>
            <input
              placeholder="Street Address"
              type="text"
              value={this.state.streetAddress}
              onChange={e => this.setState({ streetAddress: e.target.value })}
            />
            <input
              placeholder="City"
              type="text"
              value={this.state.city}
              onChange={e => this.setState({ city: e.target.value })}
            />
            <input
              placeholder="State"
              type="text"
              value={this.state.state}
              onChange={e => this.setState({ state: e.target.value })}
            />
            <input
              placeholder="Zip"
              type="text"
              value={this.state.zip}
              onChange={e => this.setState({ zip: e.target.value })}
            />
            <p className="input-label">What is your email address?</p>
            <input
              placeholder="Email"
              type="text"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
            />
            <p className="input-label">
              Are you writing about a specific bill?
            </p>
            <select
              className="select-blue"
              value={this.state.isAboutBill}
              onChange={e => this.setState({ isAboutBill: e.target.value })}
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            {isAboutBill === 'yes' && (
              <div className="dropdown">
                <p className="input-label">
                  Which specific bill do you support?
                </p>
                <p>
                  I am{' '}
                  <select
                    className="select-blue"
                    value={this.state.procon}
                    onChange={e => this.setState({ procon: e.target.value })}
                  >
                    <option value="pro">in support</option>
                    <option value="con">in opposition</option>
                  </select>{' '}
                  of{' '}
                  <select
                    className="select-blue"
                    value={this.state.issue}
                    onChange={e => this.setState({ issue: e.target.value })}
                  >
                    <option value="rb22">rb22</option>
                    <option value="somebill">somebill</option>
                  </select>
                </p>
              </div>
            )}
            <p className="input-label">What issues are you addressing?</p>
            <input
              placeholder="Education, Health, etc."
              type="text"
              value={this.state.issues}
              onChange={e => this.setState({ issues: e.target.value })}
            />
            <p className="input-label">
              What would you like to tell your Representative?
            </p>
            <textarea
              placeholder="Enter whatever you'd like to share with your Representative."
              type="text"
              value={this.state.details}
              onChange={e => this.setState({ details: e.target.value })}
            />
            <Button title="Send" onClick={this.handleSendClick} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  forms: state,
});

const mapDispatchToProps = dispatch => ({
  // dispatching plain actions
  submitOnlineForm: formData => dispatch(submitOnlineForm(formData)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactPage);

ContactPage.propTypes = {
  submitOnlineForm: PropTypes.func,
};
