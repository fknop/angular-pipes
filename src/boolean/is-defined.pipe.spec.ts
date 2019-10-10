import { IsDefinedPipe } from './is-defined.pipe';

describe('IsDefinedPipe', () => {
  let pipe: IsDefinedPipe;

  beforeEach(() => {
    pipe = new IsDefinedPipe();
  });

  it('Should return true', () => {
    expect(pipe.transform({})).toEqual(true);
  });

  it('Should return false', () => {
    expect(pipe.transform(undefined)).toEqual(false);
  });
});
