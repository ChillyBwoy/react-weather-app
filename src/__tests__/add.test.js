import { add } from '../add';

describe('add()', () => {
  it('adds two numbers', () => {
    expect(add(2, 3)).toEqual(5);
  });

  it('doesnt add the third number', () => {
    expect(add(2, 3, 4)).toEqual(add(2, 3));
  });
});
