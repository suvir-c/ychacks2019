import React from 'react';
import {
  ScatterChart,
  XAxis,
  YAxis,
  Scatter,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from 'recharts';
import moment from 'moment';
import Proptypes from 'prop-types';
import './styles.scss';

const TIMELINE_OPTIONS = {
  MONTH: 'month',
  WEEK: 'week',
  DAY: 'day',
};

class Graph extends React.Component {
  state = {
    timelineOption: TIMELINE_OPTIONS.WEEK,
    timeStart: moment().unix(),
    timeEnd: moment()
      .subtract(1, 'weeks')
      .unix(),
  };

  changeTimeline = timelineOption => {
    let timeStart = moment().unix();

    if (timelineOption === TIMELINE_OPTIONS.MONTH) {
      timeStart = moment()
        .subtract(1, 'months')
        .unix();
    } else if (timelineOption === TIMELINE_OPTIONS.WEEK) {
      timeStart = moment()
        .subtract(1, 'weeks')
        .unix();
    } else if (timelineOption === TIMELINE_OPTIONS.DAY) {
      timeStart = moment()
        .subtract(1, 'days')
        .unix();
    }

    this.setState({
      timeEnd: moment().unix(),
      timeStart,
      timelineOption,
    });
  };

  handleTimelineChange = event => {
    const timelineOption = event.target.value;

    let timeStart = moment().unix();

    if (timelineOption === TIMELINE_OPTIONS.MONTH) {
      timeStart = moment()
        .subtract(1, 'months')
        .unix();
    } else if (timelineOption === TIMELINE_OPTIONS.WEEK) {
      timeStart = moment()
        .subtract(1, 'weeks')
        .unix();
    } else if (timelineOption === TIMELINE_OPTIONS.DAY) {
      timeStart = moment()
        .subtract(1, 'days')
        .unix();
    }

    this.setState({
      timeEnd: moment().unix(),
      timeStart,
      timelineOption,
    });
  };

  render() {
    const { plots, width } = this.props;
    const { timeStart, timeEnd, timelineOption } = this.state;

    return (
      <div className="graph" style={{ width }}>
        <div className="graph-menu">
          <h2>{`This ${timelineOption}'s report`}</h2>
          <select
            className="select-blue"
            value={timelineOption}
            onChange={this.handleTimelineChange}
          >
            <option value={TIMELINE_OPTIONS.MONTH}>Month</option>
            <option value={TIMELINE_OPTIONS.WEEK}>Week</option>
            <option value={TIMELINE_OPTIONS.DAY}>Day</option>
          </select>
        </div>
        <div className="graph-info">
          <div className="graph-stats">
            <div className="stat">
              <h1>153</h1>
              <p className="light-text">Phone calls</p>
            </div>
            <div className="stat">
              <h1>309</h1>
              <p className="light-text">Emails</p>
            </div>
            <div className="stat">
              <h1>30</h1>
              <p className="light-text">Letters</p>
            </div>
          </div>
        </div>
        <div className="graph-wrapper">
          <ResponsiveContainer width="95%" height={400}>
            <ScatterChart>
              <XAxis
                dataKey="time"
                domain={[timeStart, timeEnd]}
                name="Time"
                tickFormatter={unixTime => moment(unixTime).format('DD/MM/YY')}
                type="number"
              />
              <YAxis dataKey="value" name="Value" />
              <Tooltip />
              <Legend />
              {plots.map(plot => (
                <Scatter
                  key={plot.name}
                  data={plot.data}
                  line={{ stroke: plot.lineColor }}
                  lineJointType={plot.lineJointType}
                  lineType={plot.lineType}
                  name={plot.name}
                />
              ))}
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
}

Graph.propTypes = {
  plots: Proptypes.object,
  width: Proptypes.number,
};

export default Graph;
