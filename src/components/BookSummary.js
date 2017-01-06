import React from 'react';

export default class BookSummary extends React.Component {

  constructor() {
    this.viewDetails = this.viewDetails.bind(this);
  }

  viewDetails() {
    this.props.viewDetails();
  }

  render() {

    const styles = {};
    const {book} = this.props;

    return (
      <div>
        <h2>{book.title}</h2>
        <p>{book.author}</p>
        <button onClick={this.viewDetails}>View Details</button>
      </div>
    )
  }
}