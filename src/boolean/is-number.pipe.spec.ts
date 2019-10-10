import { IsNumberPipe } from './is-number.pipe';

describe('IsNumberPipe', () => {
  let pipe: IsNumberPipe;

  beforeEach(() => {
    pipe = new IsNumberPipe();
  });

  it('Should return true', () => {
    expect(pipe.transform(1)).toEqual(true);
  });

  it('Should return true', () => {
    expect(pipe.transform(1.2)).toEqual(true);
  });

  it('Should return false', () => {
    expect(pipe.transform('a')).toEqual(false);
  });

  it('Should return false', () => {
    expect(pipe.transform(null)).toEqual(false);
  });
});
