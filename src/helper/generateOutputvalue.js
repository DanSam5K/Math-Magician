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

export default generateOutputValue;
