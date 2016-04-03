import { MeanPipe } from '../../index';
        
import {describe, it, beforeEach, expect} from 'angular2/testing';

describe('MeanPipe', () => {
    
    let pipe: MeanPipe;
    
    beforeEach(() => {
       pipe = new MeanPipe(); 
    });
    
    it('Should return 2.5', () => {
        
        expect(pipe.transform([1,2,3,4])).toEqual(2.5);
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