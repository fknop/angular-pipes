import { ToKeyValuePairsPipe } from './to-key-value-pairs';

describe('ToKeyValuePairsPipe', () => {
  let pipe: ToKeyValuePairsPipe;

  beforeEach(() => {
    pipe = new ToKeyValuePairsPipe();
  });

  const value = {
    a: 1,
    b: 2,
    c: 3,
  };

  it('should transform the object to an array of KVPs', () => {
    expect(pipe.transform(value)).toEqual([
      { key: 'a', value: 1 }, { key: 'b', value: 2 }, { key: 'c', value: 3 },
    ]);
  });

  it('should return non-object input unchanged', () => {
    expect(pipe.transform('input')).toEqual('input');
  });
});
