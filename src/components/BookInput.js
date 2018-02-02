import React, { Component } from 'react';
import { addBook } from '../actions/books';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';

export class BookInput extends Component {

  constructor(props){
    super(props);

    this.state = {
      title: '', author: ''
    };
  }

  handleOnTitleChange(event) {
    this.setState({
      title: event.target.value
    });
  }

  handleOnAuthorChange(event) {
    this.setState({
      author: event.target.value
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addBook(this.state);
  }

  render() {
    return(
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnTitleChange(event)}
            placeholder="book title" />
        </p>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnAuthorChange(event)}
            placeholder="author" />
        </p>
        <input type="submit" />
      </form>
    );
  }
};


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addBook: addBook
  }, dispatch);
};

export const ConnectedBookInput = connect(null, mapDispatchToProps)(RestaurantInput)
