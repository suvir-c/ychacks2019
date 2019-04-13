import React from 'react';
import SideNavigation from 'components/SideNavigation';

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
          <h1>Welcome</h1>
          <p className="body-text">
            This is a simple boilerplate for React code. It is built off of 
            an existing boilerplate called <a className="highlight" href="https://github.com/facebook/create-react-app">react-boilerplate</a> If you have any questions about it,
            feel free to contact me at teresaliu20@gmail.com.
          </p>
          <p className="body-text">
            To get started, go ahead and look at "app/containers/App/index.js" to see 
            the routing scheme of the app and go ahead and create your own containers and components.
          </p>
        </div>
      </div>
    );
  }
}

export default HomePage;
