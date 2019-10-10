import { IsIdenticalPipe } from './is-identical.pipe';

describe('IsIdenticalPipe', () => {
  let pipe: IsIdenticalPipe;

  beforeEach(() => {
    pipe = new IsIdenticalPipe();
  });

  it('Should return false', () => {
    expect(pipe.transform(3, 2)).toEqual(false);
  });

  it('Should return true', () => {
    expect(pipe.transform(1, 1)).toEqual(true);
  });

  it('Should return false #2', () => {
    expect(pipe.transform(1, '1')).toEqual(false);
  });
});
