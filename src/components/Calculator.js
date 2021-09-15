import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="magician">
        <input type="text" className="input-screen" value="0" disabled />
        <div className="magician-keys">

          <button type="button" className="all-clear" value="all-clear">AC</button>
          <button type="button" className="plus-minus-sign" value="+/-">+/-</button>
          <button type="button" className="percentage-sign" value="%">%</button>
          <button type="button" className="sign-operator" value="/">&divide;</button>

          <button type="button" value="7">7</button>
          <button type="button" value="8">8</button>
          <button type="button" value="9">9</button>
          <button type="button" className="sign-operator" value="*">&times;</button>

          <button type="button" value="4">4</button>
          <button type="button" value="5">5</button>
          <button type="button" value="6">6</button>
          <button type="button" className="sign-operator" value="-">-</button>

          <button type="button" value="1">1</button>
          <button type="button" value="2">2</button>
          <button type="button" value="3">3</button>
          <button type="button" className="sign-operator" value="+">+</button>

          <button type="button" value="0" className="zero">0</button>
          <button type="button" className="decimal" value=".">.</button>
          <button type="button" className="sign-operator" value="=">=</button>

        </div>
      </div>
    );
  }
}

export default Calculator;
