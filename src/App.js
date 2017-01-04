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

import {connect} from 'react-redux';
import {changeName, changeAge, addTweet, removeTweet} from './actions';
import TweetsList from './components/TweetsList';
import AddTweet from './components/AddTweet';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 10
    }

    this.onChangeNameClick = this.onChangeNameClick.bind(this);
    this.onAddTweet = this.onAddTweet.bind(this);
  }

  increment() {
    this.setState({count: this.state.count + 1})
  }

  render() {
  //   let users = ['prince', 'manoj'];
  //   let firstName = 'Prakriti';
  //   let lastName = 'Saxena';
  //
  //   let {name, address} = this.props;
  //
  //   let fullName = `my name is ${firstName} ... ${lastName}`;
  //   return (
  //     <div>
  //       <p>Count is: {this.state.count}</p>
  //       <p>{fullName}</p>
  //       <p>Properties passed from parent component: Name is {name}, Address is: {address}</p>
  //       <div>Component passed from parent: {this.props.comp}</div>
  //       {
  //         users.map((user, index) => {
  //           return <p key={index}>{user}</p>
  //         })
  //       }
  //
  //       <button onClick={this.increment.bind(this)}>Increment</button>
  //
  //       <Student/>
  //       <HelloWorldComponent/>
  //       <Header/>
  //       <Users/>
  //       <BasicPage/>
  //       <UserPage/>
  //       <Forms/>
  //       <Water/>
  //     </div>
  //   )

    console.log(this.props);
    return (<div>
      Working Awesomely, {this.props.user.name}
      <button onClick={this.onChangeNameClick}>Change Name to Manoj</button>
      <TweetsList tweets={this.props.tweets}></TweetsList>
      <AddTweet onAdd={this.onAddTweet}></AddTweet>
    </div>)
  }

  onAddTweet(tweet) {
    this.props.dispatch(addTweet(tweet));
  }

  onChangeNameClick() {
    let obj = changeName('Manoj');
    this.props.dispatch(obj);
  }

}
//
// App.propTypes = {
//   name: React.PropTypes.string.isRequired,
//   // getData: React.PropTypes.func.isRequired,
//   user: React.PropTypes.shape({
//     address: React.PropTypes.string,
//     id: React.PropTypes.number
//   }),
//   comp: React.PropTypes.element.isRequired
// };
//
// App.defaultProps = {
//   name: 'Stranger'
// };
//

let AppComponent = connect((state) => state)(App);

export default AppComponent;
