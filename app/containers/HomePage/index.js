import React from 'react';
import SideNavigation from 'components/SideNavigation';
import Graph from 'components/Graph';

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
        <div className="page-body">
          <h1>Welcome, Jimmy Gomez!</h1>
          <Graph />
        </div>
      </div>
    );
  }
}

export default HomePage;
