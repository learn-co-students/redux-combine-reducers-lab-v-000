import React, { Component } from 'react';
import { addBook } from '../actions/books';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

export class BookInput extends Component {

  constructor(props){
    super(props);

    this.state = {
      name: ''
    };
  }

  handleOnNameChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addRestaurant(this.state);
  }

  render() {
    return(
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <p>
          <input 
            type="text" 
            onChange={(event) => this.handleOnNameChange(event)} 
            placeholder="book name" />
        </p>
    
        <input type="submit" />
      </form>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addBook: addBook
  }, dispatch)
}

export const ConnectedBookInput = connect(null, mapDispatchToProps)(BookInput)

