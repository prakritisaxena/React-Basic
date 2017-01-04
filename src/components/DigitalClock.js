import React from 'react';

export default class DigitalClock extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log('Component did mount called');
    this.timerID = setInterval(
      () => this.props.update(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  formatAMPM(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return hours + ':' + minutes + ':' + seconds + ' ' + ampm;
  }

  render() {
    console.log('Component render method called');
    console.log('Inside render of clock', this.props);
    return (
      <h3>The time is {this.props.time ? this.formatAMPM(this.props.time) : null}</h3>
    )
  }
}
