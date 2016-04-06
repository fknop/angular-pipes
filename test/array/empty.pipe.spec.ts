import { EmptyPipe } from '../../index';
import {describe, it, beforeEach, expect} from 'angular2/testing';

describe('EmptyPipe', () => {
    
    let pipe: EmptyPipe;
    
    beforeEach(() => {
       pipe = new EmptyPipe(); 
    });
    
    it('Should return true', () => {
       
       expect(pipe.transform([])).toEqual(true); 
    });
    
    it('Should return false', () => {
       
       expect(pipe.transform([1,2])).toEqual(false); 
    });
    
    it('Should return the value unchanged', () => {
       
       expect(pipe.transform('a')).toEqual('a'); 
    });
    
});