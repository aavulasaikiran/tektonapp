const { addNumbers } = require(".");


describe('addNumbers', () => {
    it('should add two positive numbers', () => {
      expect(addNumbers(2, 3)).toBe(5);
    });
  
    it('should add two negative numbers', () => {
      expect(addNumbers(-5, -2)).toBe(-7);
    });
  
    it('should add a positive and a negative number', () => {
      expect(addNumbers(4, -3)).toBe(1);
    });
  
    it('should add zero and a number', () => {
      expect(addNumbers(0, 10)).toBe(10);
      expect(addNumbers(5, 0)).toBe(5);
    });
  
    it('should throw an error if inputs are not numbers', () => {
      expect(() => addNumbers('hello', 2)).toThrowError('Both inputs must be numbers');
      expect(() => addNumbers(5, {})).toThrowError('Both inputs must be numbers');
    });
  
    it('should handle large numbers', () => {
      expect(addNumbers(Number.MAX_SAFE_INTEGER, 1)).toBe(Number.MAX_SAFE_INTEGER + 1);
    });
  
    it('should handle floating-point numbers', () => {
      expect(addNumbers(2.5, 1.3)).toBeCloseTo(3.8);
    });
  });