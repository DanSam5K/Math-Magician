import React, { useState, setState } from 'react';
import MagicBtn from './MagicBtn';
import OutputResult from './OutputResult';
import calculate from '../logic/calculate';
import generateOutputValue from '../helper/generateOutputvalue';

const Calculator = () => {
  const [calculateState, calculateStateHandler] = useState(
    {
      total: null,
      next: null,
      operation: null,
    },
  );

  const clickEventListener = (event) => {
    const { value } = event.target;
    let { total, next, operation } = calculate(calculateState, value);
    if (total === undefined) {
      total = setState(calculateState.total);
    }
    if (next === undefined) {
      next = setState(calculateState.next);
    }
    if (operation === undefined) {
      operation = calculateState.operation;
    }
    calculateStateHandler({ total, next, operation });
  };

  const outputValue = generateOutputValue(calculateState);
  const buttonKeys = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '1', '='];
  const buttons = buttonKeys.map((val) => (
    <MagicBtn value={val} key={0} clickEventListener={clickEventListener} />
  ));
  return (
    <div className="magician">
      <OutputResult outputvalue={outputValue} />
      <div className="magician-keys">
        {buttons}
      </div>
    </div>
  );
};

export default Calculator;
