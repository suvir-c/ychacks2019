import React from 'react';

import SideNavigation from 'components/SideNavigation';
import data from './data.json';

export default function CardViewTemplate() {
  return (
    <div className="page-wrapper-sidebar">
      <SideNavigation />
      <div className="page-body">
        <h1>{data.title}</h1>
        <p className="body-text">{data.body}</p>
        <div className="cards-wrapper">
          {data.cards.map(cardInfo => (
            <a href={cardInfo.link} className="card">
              <div>
                <h3>{cardInfo.title}</h3>
                <p>{cardInfo.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
