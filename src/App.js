/**
 * Created by ttnd on 27/12/16.
 */
import React from 'react'
import {connect} from 'react-redux';
import {
  changeName,
  changeAge,
  addTweet,
  removeTweet,
  fetchTweets,
  updateTime
} from './actions';
import TweetsList from './components/TweetsList';
import AddTweet from './components/AddTweet';
import DigitalClock from './components/DigitalClock';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 10
    };

    this.onChangeNameClick = this.onChangeNameClick.bind(this);
    this.onAddTweet = this.onAddTweet.bind(this);
    this.fetchTweets = this.fetchTweets.bind(this);
    this.updateTime = this.updateTime.bind(this);
  }

  increment() {
    this.setState({count: this.state.count + 1})
  }

  render() {

    console.log("Inside App render method: ", this.props);
    return (<div>
      Working Awesomely, {this.props.user.name}
      <button onClick={this.onChangeNameClick}>Change Name to Manoj</button>
      <TweetsList tweets={this.props.tweets.tweets}/>
      <AddTweet onAdd={this.onAddTweet}/>
      {this.props.tweets.loading ? <h1>Fetching more tweets....</h1> : <h1>All tweets loaded</h1> }
      <button onClick={this.fetchTweets}>Fetch more tweets</button>
      <DigitalClock time={this.props.clock.time} update={this.updateTime}/>
    </div>)
  }

  onAddTweet(tweet) {
    this.props.dispatch(addTweet(tweet));
  }

  onChangeNameClick() {
    let obj = changeName('Manoj');
    this.props.dispatch(obj);
  }

  fetchTweets() {
    this.props.dispatch(fetchTweets());
  }

  updateTime() {
    this.props.dispatch(updateTime());
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
