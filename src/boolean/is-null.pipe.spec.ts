import { IsNullPipe } from './is-null.pipe';

describe('IsNullPipe', () => {
  let pipe: IsNullPipe;

  beforeEach(() => {
    pipe = new IsNullPipe();
  });

  it('Should return true', () => {
    expect(pipe.transform(null)).toEqual(true);
  });

  it('Should return false', () => {
    expect(pipe.transform(1)).toEqual(false);
  });

  it('Should return false #2', () => {
    expect(pipe.transform(undefined)).toEqual(false);
  });
});
