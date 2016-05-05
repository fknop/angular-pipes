import { MatchPipe } from '../../index';
        
import {describe, it, beforeEach, expect} from '@angular/testing';

describe('MatchPipe', () => {
    
    let pipe: MatchPipe;
    
    beforeEach(() => {
       pipe = new MatchPipe(); 
    });
    
    
    it('Should return the matched string', () => {
       
        const result = pipe.transform('abc', /a/g);
        expect(result).toEqual(['a']);
    });
    
    
    // Just use match function ...
    
    it('Should return the value unchanged', () => {
       
       expect(pipe.transform(1, null, null)).toEqual(1); 
    });
   
});