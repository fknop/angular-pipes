import { MaxPipe } from '../../index';
        
import {describe, it, beforeEach, expect} from 'angular2/testing';

describe('MaxPipe', () => {
    
    let pipe: MaxPipe;
    
    beforeEach(() => {
       pipe = new MaxPipe(); 
    });
    
    it('Should return 4', () => {
        
        expect(pipe.transform([1,2,3,4])).toEqual(4);
    });
    
    it('Should return 1', () => {
        
        expect(pipe.transform([1])).toEqual(1);
    });
    
    it('Should return 1', () => {
        
        expect(pipe.transform([1,1])).toEqual(1);
    });
    
    it('Should throw an error', () => {
        
        expect(() => {
            pipe.transform(15);
        }).toThrowError(TypeError);
    });
    
});