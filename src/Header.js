import React from 'react';

export default class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      isUserLoggedIn: false
    };
  }

  setUserName() {
    this.setState({isUserLoggedIn: true});
  }

  render() {
    return (
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
        {this.state.isUserLoggedIn ? <span>Prakriti Saxena</span> : <button onClick={this.setUserName.bind(this)}>Login</button>}
      </nav>
    );
  }
}
