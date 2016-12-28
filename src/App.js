/**
 * Created by ttnd on 27/12/16.
 */
import React from 'react'
import Student from './Student';
import HelloWorldComponent from './HelloWorldComponent';
import Header from './Header';
import Users from './Users';
import BasicPage from './BasicPage';
import UserPage from './UserPage';
import Clock from './Clock';
import Forms from './Forms';
import Water from './Day-2/Water';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 10
    }
  }

  increment() {
    this.setState({count: this.state.count + 1})
  }

  render() {
    let users = ['prince', 'manoj'];
    let firstName = 'Prakriti';
    let lastName = 'Saxena';

    let {name, address} = this.props;

    let fullName = `my name is ${firstName} ... ${lastName}`;
    return (
      <div>
        <p>Count is: {this.state.count}</p>
        <p>{fullName}</p>
        <p>Properties passed from parent component: Name is {name}, Address is: {address}</p>
        <div>Component passed from parent: {this.props.comp}</div>
        {
          users.map((user, index) => {
            return <p key={index}>{user}</p>
          })
        }

        <button onClick={this.increment.bind(this)}>Increment</button>

        <Student/>
        <HelloWorldComponent/>
        <Header/>
        <Users/>
        <BasicPage/>
        <UserPage/>
        <Forms/>
        <Water/>
      </div>
    )
  }

}

App.propTypes = {
  name: React.PropTypes.string.isRequired,
  // getData: React.PropTypes.func.isRequired,
  user: React.PropTypes.shape({
    address: React.PropTypes.string,
    id: React.PropTypes.number
  }),
  comp: React.PropTypes.element.isRequired
};

App.defaultProps = {
  name: 'Stranger'
};
