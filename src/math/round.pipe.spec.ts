import { RoundPipe } from '../../src/index';
        


describe('RoundPipe', () => {
    
    let pipe: RoundPipe;
    
    beforeEach(() => {
       pipe = new RoundPipe(); 
    });
    
    it('Should return 3', () => {
        
        expect(pipe.transform(3.4, 0)).toEqual(3);
    });
    
    it('Should return 3', () => {
        
        expect(pipe.transform(3.5, 0)).toEqual(4);
    });
    
    
    it('Should return 1', () => {
        
        expect(pipe.transform(1, 0)).toEqual(1);
    });
    
    it('Should return 1', () => {
        
        expect(pipe.transform(0.65, 0)).toEqual(1);
    });
    
    it('Should return 1.5', () => {
       
       expect(pipe.transform(1.5, 1)).toEqual(1.5); 
    });
    
    
    it('Should return 1.54', () => {
       
       expect(pipe.transform(1.5444, 2)).toEqual(1.54); 
    });
    
    it('Should return 1.35', () => {
       
       expect(pipe.transform(1.345, 2)).toEqual(1.35); 
    });
});