import { EncodeURIComponentPipe } from '../../src/index';
        


describe('EncodeURIComponentPipe', () => {
    
    let pipe: EncodeURIComponentPipe;
    
    beforeEach(() => {
       pipe = new EncodeURIComponentPipe(); 
    });
    
    it('Should return the value unchanged', () => {
       
       expect(pipe.transform(1)).toEqual(1); 
    });
   
});