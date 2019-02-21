import React, { Component } from 'react';
import { store } from './store';

class App extends Component {
  render() {
    console.log(store.getState());

    return <div className="App">Hello World</div>;
  }
}

export default App;
