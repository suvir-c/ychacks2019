import React from 'react';
import Proptypes from 'prop-types';

import './styles.scss';

const slidersData = [
  {
    lawName: 'AB139',
    mentions: 34,
    pro: 0.15,
  },
  {
    lawName: 'AB139',
    mentions: 15,
    pro: 0.65,
  },
  {
    lawName: 'AB139',
    mentions: 5,
    pro: 0.4,
  },
];

class Sliders extends React.Component {
  render() {
    const { width } = this.props;

    return (
      <div className="sliders" style={{ width }}>
        <h2>Bill Support</h2>

        {slidersData.map(slider => (
          <div className="slider">
            <div className="slider-info">
              <h3>{slider.lawName}</h3>
              <p className="light-text">{`Mentions: ${slider.mentions}`}</p>
            </div>
            <p>{`${slider.pro * 100}% In Support`}</p>
            <div className="bar">
              <div
                className="colored-bar"
                style={{ width: `${slider.pro * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

Sliders.propTypes = {
  width: Proptypes.number,
};

export default Sliders;
