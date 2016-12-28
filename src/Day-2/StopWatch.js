import React from 'react';

export default class StopWatch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: '',
      startTime: ''
    };

    this.startWatch = this.startWatch.bind(this);
  }

  startWatch() {
    if(this.state.startTime === '') {
      this.setState({
        buttonText: 'Stop timer',
        startTime: new Date().getSeconds()
      });

      this.timerID = setInterval(
        () => this.updateTimer(),
        1000
      );
    } else {
      clearInterval(this.timerID);
    }

  }

  updateTimer() {
    let startTime = this.state.startTime;
    this.setState({
      time: new Date().getSeconds() - startTime
    })
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <span>The time is : {this.state.time}</span>
        <button onClick={this.startWatch}>Start Timer</button>
      </div>
    )
  }
}
