/**
 * Created by ttnd on 27/12/16.
 */
import React from 'react';
import './style.css';

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        {
          this.props.children
        }
      </div>

    );
  }
}
