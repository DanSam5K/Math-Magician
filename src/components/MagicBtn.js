import React from 'react';
import PropTypes from 'prop-types';

class MagicBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { value, clickEventListener } = this.props;
    const className = `${value === '0' ? 'zero' : ''} ${value === 'AC' ? 'clear-all' : ''} ${value === '' ? 'zero' : ''} ${value === '÷' || value === 'x' || value === '-' || value === '+' || value === '=' ? 'sign-operator' : ''}`;
    return (
      <button type="button" className={className} value={value} onClick={clickEventListener}>{value}</button>
    );
  }
}

MagicBtn.propTypes = {
  value: PropTypes.string.isRequired,
  clickEventListener: PropTypes.func.isRequired,
};

export default MagicBtn;
