import React from 'react';

export default class ViewBook extends React.Component {
  render() {

    let {book} = this.props;
    return (
      <div>
        <h2>{book.title}</h2>
        <img src={book.image} alt="Image not found"/>
        <p>{book.description}</p>
        <p>{book.author}</p>
        <p>{book.noOfPages}</p>
        <button onClick={this.viewDetails}>View Details</button>
      </div>
    );
  }
}