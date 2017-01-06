import React from 'react';
import {browserHistory} from 'react-router';

export default class EditBook extends React.Component {

  constructor(props) {
    super(props);
    this.editBookDetails = this.editBookDetails.bind(this);
  }

  editBookDetails() {

  }

  saveChanges() {

  }

  cancelAction() {
    let id = this.props.book.id;
    browserHistory.push('bookdetails/' + id);
  }

  render() {
    let {book} = this.props;
    return (
      <div>
        Title: <input type="text" value={book.title} name="title" onChange={this.editBookDetails}/>
        <br/>
        Description: <input type="text" value={book.description} name="description" onChange={this.editBookDetails}/>
        <br/>
        Author: <input type="text" value={book.author} name="author" onChange={this.editBookDetails}/>
        <br/>
        No. of pages: <input type="text" value={book.noOfPages} name="title" onChange={this.editBookDetails}/>
      </div>
    );
  }
}