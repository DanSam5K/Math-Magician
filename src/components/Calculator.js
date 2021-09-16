import React from 'react';
import calculate from '../logic/calculate';
import MagicBtn from './MagicBtn';
import OutputResult from './OutputResult';

const generateOutputValue = ({ total, next, operation }) => {
  if (!total && !next && !operation) {
    return '0';
  } if (!total && next) {
    return `${next}`;
  } if (operation && total && !next) {
    return `${total} ${operation}`;
  } if (total && next && operation) {
    return `${total} ${operation} ${next}`;
  }
  return `${total}`;
};
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  clickEventListener = (event) => {
    const object = this.state;
    const { value } = event.target;
    const result = calculate(object, value);
    this.setState(result);
  }

  render() {
    const outputValue = generateOutputValue(this.state);
    return (
      <div className="magician">
        <OutputResult outputvalue={outputValue} />
        <div className="magician-keys">

          <MagicBtn value="AC" clickEventListener={this.clickEventListener} />
          <MagicBtn value="+/-" clickEventListener={this.clickEventListener} />
          <MagicBtn value="%" clickEventListener={this.clickEventListener} />
          <MagicBtn value="÷" clickEventListener={this.clickEventListener} />
          <MagicBtn value="7" clickEventListener={this.clickEventListener} />
          <MagicBtn value="8" clickEventListener={this.clickEventListener} />
          <MagicBtn value="9" clickEventListener={this.clickEventListener} />
          <MagicBtn value="x" clickEventListener={this.clickEventListener} />
          <MagicBtn value="4" clickEventListener={this.clickEventListener} />
          <MagicBtn value="5" clickEventListener={this.clickEventListener} />
          <MagicBtn value="6" clickEventListener={this.clickEventListener} />
          <MagicBtn value="-" clickEventListener={this.clickEventListener} />
          <MagicBtn value="1" clickEventListener={this.clickEventListener} />
          <MagicBtn value="2" clickEventListener={this.clickEventListener} />
          <MagicBtn value="3" clickEventListener={this.clickEventListener} />
          <MagicBtn value="+" clickEventListener={this.clickEventListener} />
          <MagicBtn value="0" clickEventListener={this.clickEventListener} />
          <MagicBtn value="." clickEventListener={this.clickEventListener} />
          <MagicBtn value="=" clickEventListener={this.clickEventListener} />
        </div>
      </div>
    );
  }
}

export default Calculator;
