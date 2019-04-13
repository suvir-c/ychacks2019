import React from 'react';
import {
  ScatterChart,
  XAxis,
  YAxis,
  Scatter,
  ResponsiveContainer,
} from 'recharts';
import moment from 'moment';
import './styles.scss';

const data = [
  { value: 14, time: 1503617297689 },
  { value: 15, time: 1503616962277 },
  { value: 15, time: 1503616882654 },
  { value: 20, time: 1503613184594 },
  { value: 15, time: 1503611308914 },
];

class Graph extends React.Component {
  state = {
    timeStart: 1503617297689,
    timeEnd: 1503611308914,
  };

  render() {
    const { timeStart, timeEnd } = this.state;

    return (
      <div className="graph">
        <ResponsiveContainer width="95%" height={500}>
          <ScatterChart>
            <XAxis
              dataKey="time"
              domain={[timeStart, timeEnd]}
              name="Time"
              tickFormatter={unixTime => moment(unixTime).format('dd MM YY')}
              type="number"
            />
            <YAxis dataKey="value" name="Value" />

            <Scatter
              data={data}
              line={{ stroke: '#eee' }}
              lineJointType="monotoneX"
              lineType="joint"
              name="Values"
            />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default Graph;
