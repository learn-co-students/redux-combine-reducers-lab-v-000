import React, { Component } from 'react';
import { ConnectedBookInput } from './components/BookInput';
import { ConnectedBooks } from './components/Books';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <ConnectedBookInput />
        <ConnectedBooks />
      </div>
    );
  }
};

export default App;
