import React from 'react';
import {browserHistory} from 'react-router';

export default class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.validateForm = this.validateForm.bind(this);
    this.updateForm = this.updateForm.bind(this);

    this.state = {
      username: '',
      password: ''
    };
  }

  validateForm() {
    if(this.state.username === 'prakriti' && this.state.password === 'saxena') {
      browserHistory.push('homepage');
    } else {
      browserHistory.push('loginFailed');
    }
  }

  updateForm(e) {
    let initialData = this.state;
    initialData[e.target.name] = e.target.value;
    this.setState(initialData);
  }

  render() {
    return (
      <div className="login-form">
        <h2>Login Form</h2>
        <input type="text" value={this.state.username} name="username" onChange={this.updateForm}/>
        <input type="password" value={this.state.password} name="password" onChange={this.updateForm}/>
        <button onClick={this.validateForm}>Login</button>
      </div>
    )
  }
}
