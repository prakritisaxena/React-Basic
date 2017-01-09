import React from 'react';
import ViewBook from './ViewBook';

export default class BookDetails extends React.Component {
  render() {
    return (<div>
      <ViewBook book={this.props.book}/>
    </div>)
  }
}