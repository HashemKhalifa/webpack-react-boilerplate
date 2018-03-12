import React, { Component } from 'react';
import HelloWorld from './components/hello-world';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <HelloWorld title="Hello from React and webpack ;)" />
    );
  }
}

export default App;
