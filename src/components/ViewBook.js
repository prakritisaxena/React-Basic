import React from 'react';

export default class ViewBook extends React.Component {
  render() {
    debugger;
    let {book} = this.params;

    console.log('inside viewbook', this);
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