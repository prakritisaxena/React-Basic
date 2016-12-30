import React from 'react';
import {browserHistory} from 'react-router';

export default class LoginFailed extends React.Component {

  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    browserHistory.push('/');
  }

  render() {
    return (
      <div>
        <button onClick={this.goBack}>Go Back</button>
        <p>Oops! You're not authorised!!</p>
      </div>
    )
  }
}
