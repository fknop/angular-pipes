import { AbsPipe } from './abs.pipe';

describe('AbsPipe', () => {
  let pipe: AbsPipe;

  beforeEach(() => {
    pipe = new AbsPipe();
  });

  it('Should return 2', () => {
    expect(pipe.transform(2)).toEqual(2);
  });

  it('Should return 2', () => {
    expect(pipe.transform(-2)).toEqual(2);
  });

  it('Should return NaN', () => {
    expect(pipe.transform('a')).toEqual('NaN');
  });
});
