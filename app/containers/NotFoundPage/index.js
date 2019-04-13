/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import SideNavigation from 'components/SideNavigation';

export default function NotFound() {
  return (
    <div className="page-wrapper-sidebar">
      <SideNavigation />
      <div className="page-body">
        <h1>Page Not Found!</h1>
        <p>Did you forget to add your container to the router under containers/App.js?</p>
      </div>
    </div>
  );
}
