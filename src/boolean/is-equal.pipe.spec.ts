import { IsEqualPipe } from './is-equal.pipe';

describe('IsEqualPipe', () => {
  let pipe: IsEqualPipe;

  beforeEach(() => {
    pipe = new IsEqualPipe();
  });

  it('Should return false', () => {
    expect(pipe.transform(3, 2)).toEqual(false);
  });

  it('Should return true', () => {
    expect(pipe.transform(1, 1)).toEqual(true);
  });

  it('Should return true #2', () => {
    expect(pipe.transform(1, '1')).toEqual(true);
  });
});
