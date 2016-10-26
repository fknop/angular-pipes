import { MinPipe } from '../../src/index';
        


describe('MinPipe', () => {
    
    let pipe: MinPipe;
    
    beforeEach(() => {
       pipe = new MinPipe(); 
    });
    
    it('Should return 1', () => {
        
        expect(pipe.transform([1,2,3,4])).toEqual(1);
    });
    
    it('Should return 1', () => {
        
        expect(pipe.transform([1])).toEqual(1);
    });
    
    it('Should return 1', () => {
        
        expect(pipe.transform([1,1])).toEqual(1);
    });
    
    it('Should return the value unchanged', () => {
       
       expect(pipe.transform(1)).toEqual(1); 
    });
});