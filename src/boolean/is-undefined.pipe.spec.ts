import { IsUndefinedPipe } from './is-undefined.pipe';

describe('IsUndefinedPipe', () => {
  let pipe: IsUndefinedPipe;

  beforeEach(() => {
    pipe = new IsUndefinedPipe();
  });

  it('Should return true', () => {
    expect(pipe.transform(undefined)).toEqual(true);
  });

  it('Should return false', () => {
    expect(pipe.transform(1)).toEqual(false);
  });

  it('Should return false #2', () => {
    expect(pipe.transform(null)).toEqual(false);
  });
});
