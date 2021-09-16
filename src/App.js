import React from 'react';
import Calculator from './components/Calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  render() {
    const { total, next, operation } = this.state;
    const object = { total, next, operation };
    return (
      <div className="App">
        <Calculator object={object} />
      </div>
    );
  }
}

export default App;
