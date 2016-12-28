import React from 'react';

export default class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      date: new Date()
    }
    console.log('Constructor called');
  }

  componentWillMount() {
    console.log('Component will Mount!!');
  }

  componentWillReceiveProps() {
    console.log('Component will receive props!');
  }

  componentDidMount() {
    console.log('Component Did Mount!!!!');
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    console.log('Component Will Unmount!!!!');
    clearInterval(this.timerID);
  }

  shouldComponentUpdate() {
    console.log('Inside should component Update!');
    return true;
  }

  componentWillUpdate() {
    console.log('Component will update!');
  }

  componentDidUpdate() {
    console.log('Component did update');
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    console.log('Inside Render!');
    return (
      <div>
        The time is {this.state.date.toLocaleTimeString()}
      </div>
    )
  }
}
