import operate from '../logic/operate';

describe('operate', () => {
  it('should return the sum of two numbers', () => {
    expect(operate('1', '2', '+')).toBe('3');
  });

  it('should return the difference of two numbers', () => {
    expect(operate('1', '2', '-')).toBe('-1');
  });

  it('should return the product of two numbers', () => {
    expect(operate('7', '2', 'x')).toBe('14');
  });

  it('should return the quotient of two numbers', () => {
    expect(operate('7', '2', '÷')).toBe('3.5');
  });

  it('division by 0 should return an error', () => {
    expect(operate('5', '0', '÷')).toBe("Can't divide by 0.");
  });
  it('should return the remainder of two numbers', () => {
    expect(operate('7', '2', '%')).toBe('1');
  });
});