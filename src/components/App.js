import React, { Component } from 'react';
import Card from './Card';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Start Clean Project</h1>
        </header>

        <Card />
        <Card />
      </div>
    );
  }
}

export default App;
