import { WithoutPipe } from '../../index';
import {describe, it, beforeEach, expect} from 'angular2/testing';

describe('WithoutPipe', () => {
    
    let pipe: WithoutPipe;
    
    beforeEach(() => {
       pipe = new WithoutPipe(); 
    });
    
    it('Should return values without 1', () => {
       
       const value = [1, 1, 1, 2, 3, 3, 4, 5];
       const result = pipe.transform(value, 1)
       expect(result).toEqual([2, 3, 3, 4, 5]); 
       expect(value).toEqual([1, 1, 1, 2, 3, 3, 4, 5]);
    });
    
    it('Should return values witout 1 and 2', () => {
       
       const result = pipe.transform([1, 1, 2, 3, 4, 2, 5], 1, 2);
       expect(result).toEqual([3, 4, 5]); 
    });
    
    it('Should return an empty array', () => {
       
       expect(pipe.transform([1], 1)).toEqual([]); 
    });
    
    it('Should return an empty array', () => {
       
       expect(pipe.transform([], 1)).toEqual([]); 
    });
    
    it('Should return the value unchanged', () => {
       
       expect(pipe.transform('a', null)).toEqual('a'); 
    });
});