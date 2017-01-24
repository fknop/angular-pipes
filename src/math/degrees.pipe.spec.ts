import { DegreesPipe } from '../../src/index';
        


describe('DegreesPipe', () => {
    
    let pipe: DegreesPipe;
    
    beforeEach(() => {
       pipe = new DegreesPipe(); 
    });
    
    
    it ('Should transfrom the radians to degrees', () => {
       
       const radians = Math.PI;
       expect(pipe.transform(radians)).toEqual(180);
        
    });
    
   
});