import React from 'react';
import InputElement from './InputElement';

export default class Forms extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      password: ''
    }

    this.updateUser = this.updateUser.bind(this);
  }

  updateUser(e) {
    let initialData = this.state;

    initialData[e.target.name] = e.target.value;
    this.setState(initialData);
  }

  submit() {
    let v = this.refs.nameInput;
    console.log(v.value);
  }

  render() {

    console.log('Rendering');

    return (<div>
      {/*<input type="text" name="name" value={this.state.name} onChange={this.updateUser}/>*/}
      {/*<input type="text" name="address" value={this.state.address} onChange={this.updateUser}/>*/}
      {/*<input type="text" name="password" value={this.state.password} onChange={this.updateUser}/>*/}

      <InputElement name="name" value={this.state.name} onChange={this.updateUser}/>
      <InputElement name="address" value={this.state.address} onChange={this.updateUser}/>
      <InputElement name="password" value={this.state.password} onChange={this.updateUser}/>

      <input ref='nameInput' type="text" defaultValue={this.state.name}/>

      <button onClick={this.submit.bind(this)}>Submit</button>
    </div>)

  }
}
