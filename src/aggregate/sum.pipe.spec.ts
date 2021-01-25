import { SumPipe } from './sum.pipe';

describe('SumPipe', () => {
  let pipe: SumPipe;

  beforeEach(() => {
    pipe = new SumPipe();
  });

  it('Should return 10', () => {
    expect(pipe.transform([1, 2, 3, 4])).toEqual(10);
  });

  it('Should return 1', () => {
    expect(pipe.transform([1])).toEqual(1);
  });

  it('Should return 2', () => {
    expect(pipe.transform([1, 1])).toEqual(2);
  });

  it('Should return 15', () => {
    expect(pipe.transform(15)).toEqual(15);
  });

  it('Should return 22', () => {
    expect(pipe.transform(15, 7)).toEqual(22);
  });

  it('Should return 33', () => {
    expect(pipe.transform([15, 14], 4)).toEqual(33);
  });

  it('Should return 45', () => {
    expect(pipe.transform([40], 5)).toEqual(45);
  });
});
