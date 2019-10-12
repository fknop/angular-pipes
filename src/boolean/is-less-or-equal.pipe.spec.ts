import { IsLessOrEqualPipe } from './is-less-or-equal.pipe';

describe('IsLessOrEqualPipe', () => {
  let pipe: IsLessOrEqualPipe;

  beforeEach(() => {
    pipe = new IsLessOrEqualPipe();
  });

  it('Should return false', () => {
    expect(pipe.transform(3, 2)).toEqual(false);
  });

  it('Should return true', () => {
    expect(pipe.transform(1, 2)).toEqual(true);
  });

  it('Should return true #2', () => {
    expect(pipe.transform(1, 1)).toEqual(true);
  });
});
