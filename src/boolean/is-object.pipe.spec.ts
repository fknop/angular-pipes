import { IsObjectPipe } from './is-object.pipe';

describe('IsObjectPipe', () => {
  let pipe: IsObjectPipe;

  beforeEach(() => {
    pipe = new IsObjectPipe();
  });

  it('Should return true', () => {
    expect(pipe.transform({})).toEqual(true);
  });

  it('Should return false', () => {
    expect(pipe.transform(1)).toEqual(false);
  });

  it('Should return true #2', () => {
    expect(pipe.transform([])).toEqual(true);
  });

  it('Should return false #3', () => {
    expect(pipe.transform('a')).toEqual(false);
  });
});
