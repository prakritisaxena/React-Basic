import React from 'react';

export default class DynamicTextChanger extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fontSize: "16",
      color: "red"
    }

    this.updateState = this.updateState.bind(this);
  }

  updateState(e) {
    let initialState = this.state;
    initialState[e.target.name] = e.target.value;
    this.setState(initialState);
  }

  render() {

    const textStyle = {
      fontSize: this.state.fontSize,
      color: this.state.color
    };

    return (
      <div>
        <input type="text" name="fontSize" onChange={this.updateState} value={this.state.fontSize}/>
        <br/>
        <br/>
        <input type="text" name="color" onChange={this.updateState} value={this.state.color}/>
        <br/>
        <br/>
        <p  style={textStyle}>Hello World!</p>
      </div>
    );
  }
}
