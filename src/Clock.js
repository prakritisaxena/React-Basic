import React from 'react';

export default class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      date: new Date()
    }


  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        The time is {this.state.date.toLocaleTimeString()}
      </div>
    )
  }
}
