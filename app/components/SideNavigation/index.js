import React from 'react';

import Button from 'components/Button';

/* eslint-disable react/prefer-stateless-function */
class SideNavigation extends React.Component {
  render() {
    return (
      <div className="side-navigation">
        <div className="nav-category-wrapper">
          <a href="/" className="link">
            <h4>Home</h4>
          </a>
        </div>
        <div className="nav-category-wrapper">
          <a href="/contact" className="link">
            <h4>Contacts</h4>
          </a>
        </div>
        <div className="nav-category-wrapper">
          <a href="/cards" className="link">
            <h4>Card View Template</h4>
          </a>
        </div>
        <div className="nav-category-wrapper">
          <a href="/blank" className="link">
            <h4>Blank Starter Page</h4>
          </a>
        </div>
      </div>
    );
  }
}

export default SideNavigation;
