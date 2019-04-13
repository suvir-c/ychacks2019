import React from 'react';
import SideNavigation from 'components/SideNavigation';
import Graph from 'components/Graph';
import Sliders from 'components/Sliders';
import Table from 'components/Table';
import moment from 'moment';
import './styles.scss';

const plots = [
  {
    lineColor: '#6D48D6',
    lineJointType: 'monotoneX',
    lineType: 'joint',
    name: 'Phone Calls',
    data: [
      {
        value: 14,
        time: moment()
          .subtract(1, 'days')
          .unix(),
      },
      {
        value: 15,
        time: moment()
          .subtract(2, 'days')
          .unix(),
      },
      {
        value: 15,
        time: moment()
          .subtract(3, 'days')
          .unix(),
      },
      {
        value: 20,
        time: moment()
          .subtract(4, 'days')
          .unix(),
      },
      {
        value: 15,
        time: moment()
          .subtract(5, 'days')
          .unix(),
      },
    ],
  },
  {
    lineColor: '#20A4EF',
    lineJointType: 'monotoneX',
    lineType: 'joint',
    name: 'Emails',
    data: [
      {
        value: 40,
        time: moment()
          .subtract(1, 'days')
          .unix(),
      },
      {
        value: 35,
        time: moment()
          .subtract(2, 'days')
          .unix(),
      },
      {
        value: 45,
        time: moment()
          .subtract(3, 'days')
          .unix(),
      },
      {
        value: 10,
        time: moment()
          .subtract(4, 'days')
          .unix(),
      },
      {
        value: 15,
        time: moment()
          .subtract(5, 'days')
          .unix(),
      },
    ],
  },
];

class HomePage extends React.Component {
  state = {
    name: '',
    age: '',
  };

  handleSubmit = async () => {
    alert(
      `According to this components state, you have
      ${this.state.name} as your name and ${this.state.age}
      as your age. Edit this function to add functionality on submitting this form.`,
    );
  };

  handleClickButton = () => {
    alert(
      'You clicked this button! Fill in this function to add functionality to the button',
    );
  };

  render() {
    return (
      <div className="page-wrapper-sidebar home-page">
        <SideNavigation />
        <div className="page-body dashboard">
          <h1>Welcome, Jimmy Gomez!</h1>
          <Graph plots={plots} width="100%" />
          <Table width="49%" />
          <Sliders width="49%" />
        </div>
      </div>
    );
  }
}

export default HomePage;
