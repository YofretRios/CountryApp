import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';
import { withRouter } from 'react-router-dom';
import Routes from '../routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        {renderRoutes(Routes)}
      </div>
    );
  }
}

export default withRouter(App);
