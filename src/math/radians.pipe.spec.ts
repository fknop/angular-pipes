import { RadiansPipe } from '../../src/index';
        


describe('RadiansPipe', () => {
    
    let pipe: RadiansPipe;
    
    beforeEach(() => {
       pipe = new RadiansPipe(); 
    });
    
    
    it ('Should transfrom the degrees to radians', () => {
       
       const degrees = 180;
       expect(pipe.transform(degrees)).toEqual(Math.PI);
        
    });

    it('Should return NaN', () => {
        expect(pipe.transform('a')).toEqual('NaN');
    });
});