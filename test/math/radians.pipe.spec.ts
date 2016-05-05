import { RadiansPipe } from '../../index';
        
import {describe, it, beforeEach, expect} from '@angular/testing';

describe('RadiansPipe', () => {
    
    let pipe: RadiansPipe;
    
    beforeEach(() => {
       pipe = new RadiansPipe(); 
    });
    
    
    it ('Should transfrom the degrees to radians', () => {
       
       const degrees = 180;
       expect(pipe.transform(degrees)).toEqual(Math.PI);
        
    });
    
   
});