import React from 'react';


export default class AddTweet extends React.Component {

  constructor() {
    super();
  }

  addTweet() {
    let val = this.refs.tweetInput.value;
    this.props.onAdd(val);
  }

  render() {
    return (
      <div>
        <input type="text" defaultValue={''} ref={'tweetInput'}/>
        <button onClick={this.addTweet.bind(this)}>Add Tweet</button>
      </div>
    )
  }
}
