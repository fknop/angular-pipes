import { IsFunctionPipe } from './is-function.pipe';

describe('IsFunctionPipe', () => {
  let pipe: IsFunctionPipe;

  beforeEach(() => {
    pipe = new IsFunctionPipe();
  });

  it('Should return true', () => {
    expect(pipe.transform(function() {})).toEqual(true);
  });

  it('Should return false', () => {
    expect(pipe.transform(1)).toEqual(false);
  });

  it('Should return false #2', () => {
    expect(pipe.transform(null)).toEqual(false);
  });
});
