import React from 'react';
import FontAwesome from 'react-fontawesome';

export default class ScrollToTop extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      display: "none"
    };

    this.scrollToTop = this.scrollToTop.bind(this);
    this.scrollHandler = this.scrollHandler.bind(this);
  }

  scrollToTop() {
    window.scrollTo(0,0);
  }

  scrollHandler() {
    if(window.scrollY >= this.props.scrollOffset) {
      this.setState({
        display: "block"
      })
    } else {
      this.setState({
        display: "none"
      });
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollHandler);
  }
  render() {

    let {position, background} = this.props;

    const styles = {
      backgroundColor: background,
      top: position.top,
      left: position.left,
      right: position.right,
      bottom: position.bottom,
      display: this.state.display,
      height: "70px",
      width: "70px",
      lineHeight: "70px",
      textAlign: "center",
      marginRight: "10px",
      fontSize: "40px"
    };

    return (
      <div style={styles}>
        <FontAwesome name="arrow-circle-up" onClick={this.scrollToTop}/>
      </div>
    );
  }
}

ScrollToTop.propTypes = {
  background: React.PropTypes.string,
  position: React.PropTypes.shape({
    top: React.PropTypes.number,
    left: React.PropTypes.number,
    bottom: React.PropTypes.number,
    right: React.PropTypes.number
  }),
  scrollOffset: React.PropTypes.string
};
