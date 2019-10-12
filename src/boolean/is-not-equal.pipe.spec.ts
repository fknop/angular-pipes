import { IsNotEqualPipe } from './is-not-equal.pipe';

describe('IsNotEqualPipe', () => {
  let pipe: IsNotEqualPipe;

  beforeEach(() => {
    pipe = new IsNotEqualPipe();
  });

  it('Should return true', () => {
    expect(pipe.transform(3, 2)).toEqual(true);
  });

  it('Should return false', () => {
    expect(pipe.transform(1, 1)).toEqual(false);
  });

  it('Should return false #2', () => {
    expect(pipe.transform(1, '1')).toEqual(false);
  });
});
