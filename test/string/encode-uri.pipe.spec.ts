import { EncodeURIPipe } from '../../index';
        


describe('EncodeURIPipe', () => {
    
    let pipe: EncodeURIPipe;
    
    beforeEach(() => {
       pipe = new EncodeURIPipe(); 
    });
    
    it('Should return the value unchanged', () => {
       
       expect(pipe.transform(1)).toEqual(1); 
    });
   
});