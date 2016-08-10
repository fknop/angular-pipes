import { CountPipe } from '../../index';


describe('CountPipe', () => {
    
    let pipe: CountPipe;
    
    beforeEach(() => {
       pipe = new CountPipe(); 
    });
    
    it('Should return the length of the collection', () => {
       
       expect(pipe.transform([1,2])).toEqual(2); 
    });
    
    it('Should return the length of the object (keys)', () => {
       
       expect(pipe.transform({ a: 1, b: 2, c: 3})).toEqual(3); 
    });
    
  
    
    it('Should return the value unchanged', () => {
       
       expect(pipe.transform('a')).toEqual('a'); 
    });
    
});