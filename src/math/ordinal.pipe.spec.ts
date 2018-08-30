import { OrdinalPipe } from './ordinal.pipe';

describe('OrdinalPipe', () => {
    
    let pipe: OrdinalPipe;
    
    beforeEach(() => {
       pipe = new OrdinalPipe(); 
    });
    
    it('Should return 123rd', () => {
        
        expect(pipe.transform(123)).toEqual('123rd');
    });

    it('Should return 221st', () => {
        
        expect(pipe.transform(221)).toEqual('221st');
    });
    
    it('Should return 2nd', () => {
       
        expect(pipe.transform(2)).toEqual('2nd'); 
    });

    it('Should return 15th', () => {
       
        expect(pipe.transform(15)).toEqual('15th'); 
    });

    it('Should return NaN', () => {
        expect(pipe.transform('a')).toEqual('NaN');
    });
  
});