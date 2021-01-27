import React, { Component } from 'react';
import Card from './Card';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <div>
            <h1 className="title">CountryApp</h1>
          </div>
        </header>

        <div className="container">
          <Card />

          <Card />
        </div>
      </div>
    );
  }
}

export default App;
