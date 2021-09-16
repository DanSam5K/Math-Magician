import React from 'react';
import calculate from '../logic/calculate';
import MagicBtn from './MagicBtn';
import OutputResult from './OutputResult';


const generateOutputValue= ({total, next, operation}) => {
  if (!total && !next && !operation) {
      return '0';
    }else if (!total && next) {
      return `${next}`;
    } else if (operation && total && !next) {
      return `${total} ${operation}`;
    } else if (total && next && operation) {
      return `${total} ${operation} ${next}`;
    } else {
      return `${total}`;
    }
}
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
    const value = event.target.value;
    const result = calculate(object, value);
    this.setState(result);
  }

  render() {
    const outputValue = generateOutputValue(this.state);
    return (
      <div className="magician">
        <OutputResult outputvalue={outputValue}/>
        <div className="magician-keys">

          <MagicBtn  value="AC"  clickEventListener={this.clickEventListener}/>
          <MagicBtn  value="+/-" clickEventListener={this.clickEventListener}/>
          <MagicBtn  value="%"   clickEventListener={this.clickEventListener}/>
          <MagicBtn  value="÷"   clickEventListener={this.clickEventListener}/>
          <MagicBtn  value="7"   clickEventListener={this.clickEventListener}/>
          <MagicBtn  value="8"   clickEventListener={this.clickEventListener}/>
          <MagicBtn  value="9"   clickEventListener={this.clickEventListener}/>
          <MagicBtn  value="x"   clickEventListener={this.clickEventListener}/>
          <MagicBtn  value="4"   clickEventListener={this.clickEventListener}/>
          <MagicBtn  value="5"   clickEventListener={this.clickEventListener}/>
          <MagicBtn  value="6"   clickEventListener={this.clickEventListener}/>
          <MagicBtn  value="-"   clickEventListener={this.clickEventListener}/>
          <MagicBtn  value="1"   clickEventListener={this.clickEventListener}/>
          <MagicBtn  value="2"   clickEventListener={this.clickEventListener}/>
          <MagicBtn  value="3"   clickEventListener={this.clickEventListener}/>
          <MagicBtn  value="+"   clickEventListener={this.clickEventListener}/>
          <MagicBtn  value="0"   clickEventListener={this.clickEventListener}/>
          <MagicBtn  value="."   clickEventListener={this.clickEventListener}/>
          <MagicBtn  value="="   clickEventListener={this.clickEventListener}/>
          
          
          {/* <input type="text" className="input-screen" value="0" disabled />
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
          <button type="button" className="sign-operator" value="=">=</button> */}

        </div>
      </div>
    );
  }
}

export default Calculator;
