import { InitialPipe } from '../../index';
import {describe, it, beforeEach, expect} from 'angular2/testing';

describe('InitialPipe', () => {
    
    let pipe: InitialPipe;
    
    beforeEach(() => {
       pipe = new InitialPipe(); 
    });
    
    it('Should return []', () => {
       
       expect(pipe.transform([])).toEqual([]); 
    });
    
    it('Should return [1]', () => {
       
       expect(pipe.transform([1,2])).toEqual([1]); 
    });
    
    it ('Should return [1, 2]', () => {
       
       expect(pipe.transform([1, 2, 3])).toEqual([1,2]); 
    });
    
    it('Should throw an error', () => {
       
       expect(() => {
           pipe.transform('a')
       }).toThrowError(TypeError); 
    });
    
})