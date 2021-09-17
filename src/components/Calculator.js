import React from 'react';
import MagicBtn from './MagicBtn';
import OutputResult from './OutputResult';
import calculate from '../logic/calculate';
import generateOutputValue from '../helper/generateOutputvalue';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  clickEventListener = (event) => {
    const object = this.state;
    const { value } = event.target;
    const result = calculate(object, value);
    this.setState(result);
  }

  render() {
    const outputValue = generateOutputValue(this.state);
    const buttonKeys = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '1', '='];
    const buttons = buttonKeys.map((val) => (
      <MagicBtn value={val} key={0} clickEventListener={this.clickEventListener} />
    ));
    return (
      <div className="magician">
        <OutputResult outputvalue={outputValue} />
        <div className="magician-keys">
          {buttons}
        </div>
      </div>
    );
  }
}

export default Calculator;
