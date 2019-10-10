import { IsStringPipe } from './is-string.pipe';

describe('IsStringPipe', () => {
  let pipe: IsStringPipe;

  beforeEach(() => {
    pipe = new IsStringPipe();
  });

  it('Should return true', () => {
    expect(pipe.transform('a')).toEqual(true);
  });

  it('Should return false', () => {
    expect(pipe.transform(1)).toEqual(false);
  });
});
