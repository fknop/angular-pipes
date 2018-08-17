import { OrdinalPipe } from './ordinal.pipe';

describe('OrdinalPipe', () => {
    
    let pipe: OrdinalPipe;
    
    beforeEach(() => {
       pipe = new OrdinalPipe(); 
    });
    
    it('Should return rd', () => {
        
        expect(pipe.transform(123)).toEqual('123rd');
    });
    
    it('Should return nd', () => {
       
        expect(pipe.transform(2)).toEqual('2nd'); 
    });

    it('Should return th', () => {
       
        expect(pipe.transform(15)).toEqual('15th'); 
    });

    it('Should return NaN', () => {
        expect(pipe.transform('a')).toEqual('NaN');
    });
  
});