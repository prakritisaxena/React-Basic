/**
 * Created by ttnd on 27/12/16.
 */
import React from 'react'

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      count : 10
    }
  }

  increment() {
    this.setState({count: this.state.count + 1})
  }
  render() {
    let users = ['prince', 'manoj'];
    let firstName = 'Prakriti';
    let lastName = 'Saxena';

    let fullName = `my name is ${firstName} ... ${lastName}`;
    return (
      <div>
        <p>Count is: {this.state.count}</p>
        <p>{fullName}</p>
        {
          users.map((user) =>  {
            return <p>{user}</p>
          })
        }

        <button onClick={this.increment.bind(this)}>Increment</button>
      </div>
    )
  }

}

