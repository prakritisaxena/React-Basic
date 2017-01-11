import React from 'react';
import {browserHistory} from 'react-router';
import {updateBookDetails} from '../actions';
import {connect} from 'react-redux';

export class EditBookComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      book: {

      }
    };
    this.updateInputField = this.updateInputField.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
  }

  updateInputField(e) {
    let initialState = this.state;
    initialState.book[e.target.name] = e.target.value;
    this.setState(initialState);
  }

  saveChanges(id) {
    this.props.updateBookDetails(id);
  }

  cancelAction() {
    let id = this.props.book.id;
    browserHistory.push('bookdetails/' + id);
  }

  render() {
    let {book} = this.props.booksData.currentBook;
    return (
      <div>
        Title: <input type="text" value={book.title} name="title" onChange={this.updateInputField}/>
        <br/>
        Description: <input type="text" value={book.description} name="description" onChange={this.updateInputField}/>
        <br/>
        Author: <input type="text" value={book.author} name="author" onChange={this.updateInputField}/>
        <br/>
        No. of pages: <input type="text" value={book.noOfPages} name="title" onChange={this.updateInputField}/>
        <button onClick={()=> {this.saveChanges(book.id)}}>Save</button>
      </div>
    );
  }
}

const EditBook = connect((state) => {
  return state;
}, dispatch => {
  return {
    updateBookDetails(id) {
      dispatch(updateBookDetails(id));
    }
  }
})(EditBookComponent);

export default EditBook;