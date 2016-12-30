import React from 'react';
import FontAwesome from 'react-fontawesome';

class Tiles extends React.Component {
  render() {
    const styleWrapper = {
      background: this.props.background,
      height: "120px",
      width: "120px",
      lineHeight: "120px",
      textAlign: "center",
      display: "inline-block",
      marginRight: "10px"
    };

    const fontStyle = {
      fontSize: "40px",
      color: "#fff",
      fontWeight: "bold"
    };

    return (
      <div style={styleWrapper}>
        <FontAwesome style={fontStyle} name={this.props.name}/>
      </div>
    )
  }
}

export default Tiles
