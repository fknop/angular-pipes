import { MinPipe } from '../../index';
        
import {describe, it, beforeEach, expect} from 'angular2/testing';

describe('MinPipe', () => {
    
    let pipe: MinPipe;
    
    beforeEach(() => {
       pipe = new MinPipe(); 
    });
    
    it('Should return 1', () => {
        
        expect(pipe.transform([1,2,3,4])).toEqual(1);
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