import { OrdinalPipe } from './ordinal.pipe';

describe('OrdinalPipe', () => {
  let pipe: OrdinalPipe;

  beforeEach(() => {
    pipe = new OrdinalPipe();
  });

  it('Should return 123rd', () => {
    expect(pipe.transform(123)).toEqual('123rd');
  });

  it('Should return 221st', () => {
    expect(pipe.transform(221)).toEqual('221st');
  });

  it('Should return 2nd', () => {
    expect(pipe.transform(2)).toEqual('2nd');
  });

  it('Should return 15th', () => {
    expect(pipe.transform(15)).toEqual('15th');
  });

  it('Should return 11th', () => {
    expect(pipe.transform(11)).toEqual('11th');
  });

  it('Should return 12th', () => {
    expect(pipe.transform(12)).toEqual('12th');
  });

  it('Should return 133313th', () => {
    expect(pipe.transform(133313)).toEqual('133313th');
  });

  it('Should return NaN', () => {
    expect(pipe.transform('a')).toEqual('NaN');
  });

  it('Should return 35th', () => {
    expect(pipe.transform(35)).toEqual('35th');
  });
});
