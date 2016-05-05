import { ShufflePipe } from '../../index';
import {describe, it, beforeEach, expect} from '@angular/testing';

describe('ShufflePipe', () => {
    
    let pipe: ShufflePipe;
    
    beforeEach(() => {
       pipe = new ShufflePipe(); 
    });
    
    it('Should return the value unchanged', () => {
       
       expect(pipe.transform('a')).toEqual('a'); 
    });
    
});