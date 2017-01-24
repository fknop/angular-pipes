import { TruncatePipe } from '../../src/index';
        


describe('TruncatePipe', () => {
    
    let pipe: TruncatePipe;
    
    beforeEach(() => {
       pipe = new TruncatePipe(); 
    });
    
    it ('Should truncate', () => {
       
       expect(pipe.transform('Hello World', 4, '', false)).toEqual('Hell'); 
    });
    
    it ('Should truncate but preserve word', () => {
       
       expect(pipe.transform('Hello World', 4, '', true)).toEqual('Hello'); 
    });
    
    it ('Should truncate but preserve word and add suffix', () => {
       
       expect(pipe.transform('Hello World', 4, '...', true)).toEqual('Hello...'); 
    });
    
    
    it ('Should truncate but preserve word and add suffix', () => {
       
       expect(pipe.transform('Hello World, how is it going?', 14, '...', true))
        .toEqual('Hello World, how...'); 
    });
    
   
    it('Should return the value unchanged', () => {
       
       expect(pipe.transform(1, null)).toEqual(1); 
    });
   
});