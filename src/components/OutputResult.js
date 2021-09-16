import React from 'react';
import PropTypes from 'prop-types';

const OutputResult = ({ outputvalue }) => <div className="input-screen">{outputvalue}</div>;

OutputResult.propTypes = {
  outputvalue: PropTypes.string,
};

OutputResult.defaultProps = {
  outputvalue: '',
};

export default OutputResult;
