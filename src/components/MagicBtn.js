import React from 'react';

class MagicBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { value, clickEventListener } = this.props;
    const className =`${value === '0' ? 'zero' : ''} ${value === "÷" || value === 'x' || value === '-' || value === '+' || value === '=' ? 'operator' : ''}`;
    return (
      <button type="button" className={className}  value={value} onClick={clickEventListener}>{value}</button>
    );
  }
}

export default MagicBtn;