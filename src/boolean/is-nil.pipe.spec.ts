import { IsNilPipe } from './is-nil.pipe';

describe('IsNilPipe', () => {
  let pipe: IsNilPipe;

  beforeEach(() => {
    pipe = new IsNilPipe();
  });

  it('Should return true', () => {
    expect(pipe.transform(null)).toEqual(true);
  });

  it('Should return false', () => {
    expect(pipe.transform(1)).toEqual(false);
  });

  it('Should return true #2', () => {
    expect(pipe.transform(undefined)).toEqual(true);
  });
});
