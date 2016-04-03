import { UniqPipe } from '../../index';
import {describe, it, beforeEach, expect} from 'angular2/testing';

describe('UniqPipe', () => {
    
    let pipe: UniqPipe;
    
    beforeEach(() => {
       pipe = new UniqPipe(); 
    });
    
    it('Should return unique values', () => {
       
       const result = pipe.transform([1, 1, 1, 2, 3, 3, 4, 5])
       expect(result).toEqual([1, 2, 3, 4, 5]); 
    });
    
    it('Should return unique values #2', () => {
       
       const result = pipe.transform(['a', 'a', 1, 'b', 3, 3, 4, 5])
       expect(result).toEqual(['a', 1, 'b', 3, 4, 5]); 
    });
    
    it('Should throw an error', () => {
       
       expect(() => {
           pipe.transform('a');
       }).toThrowError(TypeError);
    });
});