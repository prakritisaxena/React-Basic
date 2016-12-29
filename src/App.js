/**
 * Created by ttnd on 27/12/16.
 */
import React from 'react';
import {Link, browserHistory} from 'react-router';

export default class App extends React.Component {

  goToContact() {
    browserHistory.push('contactus');
  }


  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/aboutus">About</Link></li>
          <li><Link to="/contacus">ContactUs</Link></li>
          <li><Link to="/users">Users</Link></li>
        </ul>

        {this.props.children}

        <button onClick={this.goToContact.bind(this)}>Go to Contact Us</button>
      </div>
    )
  }
}

