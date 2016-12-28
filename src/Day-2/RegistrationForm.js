import React from 'react';
import './style.css';

export default class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: {
        value: '',
        error: ''
      },
      lastName: {
        value: '',
        error: ''
      },
      email: {
        value: '',
        error: ''
      },
      contactNo: {
        value: '',
        error: ''
      },
      password: {
        value: '',
        error: ''
      },
      confirmPassword: {
        value: '',
        error: ''
      },
      hasError: true
    };

    this.updateForm = this.updateForm.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  updateForm(e) {
    let initialData = this.state;
    initialData[e.target.name] = e.target.value;
    this.setState(initialData);
  }

  submitForm() {
    let currentState = this.state;
    let errors = [];
    let re =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let hasError = false;

    if(currentState.firstName.value === '') {
      currentState.firstName.error = 'First name cannot be blank';
      hasError = true;
    }
    if(currentState.lastName.value === '') {
      currentState.lastName.error = 'Last name cannot be blank';
      hasError = true;
    }
    if((currentState.firstName.value !== currentState.lastName.value)) {
      currentState.firstName.error = 'First name and last name should be equal';
      currentState.lastName.error = 'First name and last name should be equal';
      hasError = true;
    }

    if(currentState.password.value !== currentState.confirmPassword.value) {
      currentState.password.error = 'Password and confirm password are not equal';
      hasError = true;
    }

    if(!re.test(currentState.email.value)) {
      currentState.email.error = 'Invalid email';
      hasError = true;
    }

    if(currentState.contactNo.toString().length !== 10) {
      currentState.contactNo.error = 'Phone no. should be of 10 digits';
      hasError = true;
    }

    this.setState({
      hasError: hasError
    })
  }

  render() {
    return (
      <div>
        <h2>Form</h2>
        <table>
          <tr>
            <td>FirstName</td>
            <td>
              <input type="text" name="firstName" value={this.state.firstName.value} onChange={this.updateForm}/>
              {this.state.firstName.error === '' ? '' : <p className="errorString">{this.state.firstName.error}</p>}
            </td>
          </tr>
          <tr>
            <td>LastName</td>
            <td>
              <input type="text" name="lastName" value={this.state.lastName.value} onChange={this.updateForm}/>
              {this.state.lastName.error === '' ? '' :<p className="errorString">{this.state.lastName.error}</p>}
            </td>
          </tr>
          <tr>
            <td>Email</td>
            <td>
              <input type="email" name="email" value={this.state.email.value} onChange={this.updateForm}/>
              {this.state.email.error === '' ? '' : <p className="errorString">{this.state.email.error}</p>}
            </td>
          </tr>
          <tr>
            <td>Contact No.</td>
            <td>
              <input type="number" name="contactNo" value={this.state.contactNo.value} onChange={this.updateForm}/>
              {this.state.contactNo.error === '' ? '' : <p className="errorString">{this.state.contactNo.error}</p>}
            </td>
          </tr>
          <tr>
            <td>Password</td>
            <td>
              <input type="password" name="password" value={this.state.password.value} onChange={this.updateForm}/>
              {this.state.password.error === '' ? '' : <p className="errorString">{this.state.password.error}</p>}
            </td>
          </tr>
          <tr>
            <td>Confirm Password</td>
            <td>
              <input type="password" name="confirmPassword" value={this.state.confirmPassword.value} onChange={this.updateForm}/>
              {this.state.confirmPassword.error === '' ? '' : <p className="errorString">{this.state.confirmPassword.error}</p>}
            </td>
          </tr>
        </table>

        {this.state.hasError ? '' : <span className="successString">'Form validation is successful'</span>}

        <input type="submit" onClick={this.submitForm}/>
      </div>
    )
  }
}
