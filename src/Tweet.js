import React from 'react';

export default class Tweet extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tweetText: '',
      noOfCharsLeft: 50,
      disabled: false
    };

    this.tweet = this.tweet.bind(this);
    this.updateTweet = this.updateTweet.bind(this);
  }

  updateTweet(e) {
    let noOfCharsLeft = this.state.noOfCharsLeft - e.target.value.length;

    this.setState({
      tweetText: e.target.value,
      noOfCharsLeft: noOfCharsLeft,
      disabled: noOfCharsLeft < 0
    });
  }

  tweet() {
    alert("Successfully tweeted");
  }

  render() {
    return (
      <div>
        <textarea name="tweet-text" id="" cols="30" rows="10" value={this.state.tweetText} onChange={this.updateTweet}/>
        <div>
          <span>{this.state.noOfCharsLeft}</span>
          <button disabled={this.state.disabled} onClick={this.tweet}>Tweet</button>
        </div>
      </div>
    )
  }
}
