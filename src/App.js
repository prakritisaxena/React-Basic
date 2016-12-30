/**
 * Created by ttnd on 27/12/16.
 */
import React from 'react';
import {Link, browserHistory} from 'react-router';
import './styles.css';
import LoginForm from './LoginForm';

export default class App extends React.Component {

  goToContact() {
    browserHistory.push('contactus');
  }


  render() {
    return (
      <div>
        <ul className="my-navbar-list">
          <li className="my-navbar-list-item"><Link to="/">Home</Link></li>
          <li className="my-navbar-list-item"><Link to="/aboutus">About</Link></li>
          <li className="my-navbar-list-item"><Link to="/contactus">ContactUs</Link></li>
          <li className="my-navbar-list-item"><Link to="/users">Users</Link></li>
        </ul>

        {this.props.children}

        {/*<button onClick={this.goToContact.bind(this)}>Go to Contact Us</button>*/}
      </div>
    )
  }
}

