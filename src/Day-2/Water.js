import React from 'react';

export default class Water extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      temperature: 0
    }
  }

  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.updateTemperature(),
      5000
    );
  }

  updateTemperature() {
    let temperature = (Math.random() * 120) - 10;
    this.setState({
      temperature: temperature
    });
  }

  render() {
    let {temperature} = this.state;
    return (
      <div>
        <p>Current temperature: {this.state.temperature}</p>
        {
          temperature <= 0 ? <span>Water is solid</span> : (temperature > 0 && temperature < 100 ?
              <span>Water is liquid</span> : <span>Water in gaseous state</span>)
        }
      </div>
    )
  }
}
