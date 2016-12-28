import React from 'react';

export default class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: {
        value: '',
        hasError: false
      },
      lastName: {
        value: '',
        hasError: false
      },
      email: {
        value: '',
        hasError: false
      },
      contactNo: {
        value: '',
        hasError: false
      },
      password: {
        value: '',
        hasError: false
      },
      confirmPassword: {
        value: '',
        hasError: false
      }
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

    console.log(this.state);

    if(!(currentState.firstName === currentState.lastName) ||
       !(currentState.contactNo.toString().trim().length === 10) ||
       !(currentState.password === currentState.confirmPassword)) {
      console.log('Error in form');
    } else {
      console.log('Form submitted successfully');
    }
  }

  render() {
    return (
      <div>
        <h2>Form</h2>
        <table>
          <tr>
            <td>FirstName</td>
            <td><input type="text" name="firstName" value={this.state.firstName.value} onChange={this.updateForm} inputProps={{required: true}}/></td>
          </tr>
          <tr>
            <td>LastName</td>
            <td><input type="text" name="lastName" value={this.state.lastName.value} onChange={this.updateForm} inputProps={{required: true}}/></td>
          </tr>
          <tr>
            <td>Email</td>
            <td><input type="email" name="email" value={this.state.email.value} onChange={this.updateForm}/></td>
          </tr>
          <tr>
            <td>Contact No.</td>
            <td><input type="number" name="contactNo" value={this.state.contactNo.value} onChange={this.updateForm}/></td>
          </tr>
          <tr>
            <td>Password</td>
            <td><input type="password" name="password" value={this.state.password.value} onChange={this.updateForm}/></td>
          </tr>
          <tr>
            <td>Confirm Password</td>
            <td><input type="password" name="confirmPassword" value={this.state.confirmPassword.value} onChange={this.updateForm}/></td>
          </tr>
        </table>

        <input type="submit" onClick={this.submitForm}/>
      </div>
    )
  }
}
