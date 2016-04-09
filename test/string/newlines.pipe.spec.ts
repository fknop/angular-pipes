import { NewlinesPipe } from '../../index';
        
import {describe, it, beforeEach, expect} from 'angular2/testing';

describe('NewlinesPipe', () => {
    
    let pipe: NewlinesPipe;
    
    beforeEach(() => {
       pipe = new NewlinesPipe(); 
    });
    
    
    it('Should return the replaced string', () => {
       
        const value = 'abcd\r\n';
        const result = pipe.transform(value);
        expect(result).toEqual('abcd<br />');
    });
    
    it('Should return the replaced string #2', () => {
       
        const value = 'abcd\r';
        const result = pipe.transform(value);
        expect(result).toEqual('abcd<br />');
    });
    
    it('Should return the replaced string #3', () => {
       
        const value = 'abcd\n';
        const result = pipe.transform(value);
        expect(result).toEqual('abcd<br />');
    });
    
    
  
    
    it('Should return the value unchanged', () => {
       
       expect(pipe.transform(1, [null, null])).toEqual(1); 
    });
   
});