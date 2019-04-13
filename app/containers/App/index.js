/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage';
import CardViewTemplate from 'containers/CardViewTemplate';
import ContactPage from 'containers/ContactPage';
import NotFoundPage from 'containers/NotFoundPage';
import BlankPage from 'containers/BlankPage';
import TopNavigation from 'components/TopNavigation';
import Footer from 'components/Footer';

require('../../stylesheets/main.scss');

export default function App() {
  return (
    <div>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <TopNavigation />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/cards" component={CardViewTemplate} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/blank" component={BlankPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  );
}
