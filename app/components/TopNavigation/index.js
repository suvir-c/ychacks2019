import React from 'react';

import Logo from '../../images/logo.svg';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    return (
      <div className="topNavigation">
        <div className="logo-wrapper">
          <a href="/">
            <img src={Logo} alt="logo" className="logo" />
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
