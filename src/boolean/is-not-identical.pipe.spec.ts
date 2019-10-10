import { IsNotIdenticalPipe } from './is-not-identical.pipe';

describe('IsNotIdenticalPipe', () => {
  let pipe: IsNotIdenticalPipe;

  beforeEach(() => {
    pipe = new IsNotIdenticalPipe();
  });

  it('Should return true', () => {
    expect(pipe.transform(3, 2)).toEqual(true);
  });

  it('Should return false', () => {
    expect(pipe.transform(1, 1)).toEqual(false);
  });

  it('Should return true #2', () => {
    expect(pipe.transform(1, '1')).toEqual(true);
  });
});
