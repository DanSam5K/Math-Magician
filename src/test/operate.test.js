import operate from '../logic/operate';

describe('operate', () => {
  it('should return the sum of two numbers', () => {
    expect(operate('1', '2', '+')).toBe('3');
  });

  it('should return the difference of two numbers', () => {
    expect(operate('1', '2', '-')).toBe('-1');
  });
});