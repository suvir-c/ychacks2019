/**
 * BlankPage
 *
 * This is your blank canvas!
 */

import React from 'react';

import styles from './styles.scss';

class BlankPage extends React.Component  {
  render() {
    return (
      <div className="blank-page">
        <p>This page is intentionally left blank. This is your canvas for the rest of the app!</p>
        <p>You can also go back by pressing the logo in the corner.</p>
      </div>
    );
  }
}

export default BlankPage;
