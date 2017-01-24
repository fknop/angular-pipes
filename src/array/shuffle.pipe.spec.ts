import { ShufflePipe } from '../../src/index';


describe('ShufflePipe', () => {
    
    let pipe: ShufflePipe;
    
    beforeEach(() => {
       pipe = new ShufflePipe(); 
    });
    
    it('Should return the value unchanged', () => {
       
       expect(pipe.transform('a')).toEqual('a'); 
    });
    
});