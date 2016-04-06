import { ReversePipe } from '../../index';
import {describe, it, beforeEach, expect} from 'angular2/testing';

describe('ReversePipe', () => {
    
    let pipe: ReversePipe;
    
    beforeEach(() => {
       pipe = new ReversePipe(); 
    });
    
    it('Should return the reversed array', () => {
       
       expect(pipe.transform([1, 2, 3])).toEqual([3, 2, 1]); 
    });
    
    it('Should return the value unchanged', () => {
       
       expect(pipe.transform('a')).toEqual('a'); 
    });
    
});