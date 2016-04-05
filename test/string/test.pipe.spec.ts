import { TestPipe } from '../../index';
        
import {describe, it, beforeEach, expect} from 'angular2/testing';

describe('TestPipe', () => {
    
    let pipe: TestPipe;
    
    beforeEach(() => {
       pipe = new TestPipe(); 
    });
    
    
    it('Should return true', () => {
       
        const result = pipe.transform('abc', [/a/g]);
        expect(result).toEqual(true);
    });
    
    it('Should return false', () => {
       
        const result = pipe.transform('abc', [/d/g]);
        expect(result).toEqual(false);
    });
    
    
    // Just use test function ...
    
    it ('Should throw an error', () => {
       
       expect(() => {
           pipe.transform('a')
       }).toThrowError(Error)
        
    });
    
    it ('Should throw an error', () => {
       
       expect(() => {
           pipe.transform([])
       }).toThrowError(TypeError)
        
    });
   
});