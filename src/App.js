import React, { Component } from 'react';
import { ConnnectedDashboard } from '../src/components/Dashboard';
class App extends Component {
  render() {

    return (
      <React.Fragment>
        <div className="App">Hello World</div>
        <ConnnectedDashboard />
      </React.Fragment>
    );
  }
}

export default App;
