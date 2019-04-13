/**
 *
 * Button.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  // Render an anchor tag
  const button = (
    <a href={props.href} onClick={props.onClick}>
      {props.title}
    </a>
  );

  return <div className="button">{button}</div>;
}

Button.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string,
};

export default Button;
