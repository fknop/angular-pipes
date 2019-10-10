import { IsArrayPipe } from './is-array.pipe';

describe('IsArrayPipe', () => {
  let pipe: IsArrayPipe;

  beforeEach(() => {
    pipe = new IsArrayPipe();
  });

  it('Should return true', () => {
    expect(pipe.transform([1, 2])).toEqual(true);
  });

  it('Should return false', () => {
    expect(pipe.transform(1)).toEqual(false);
  });
});
