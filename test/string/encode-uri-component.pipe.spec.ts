import { EncodeURIComponentPipe } from '../../index';
        
import {describe, it, beforeEach, expect} from 'angular2/testing';

describe('EncodeURIComponentPipe', () => {
    
    let pipe: EncodeURIComponentPipe;
    
    beforeEach(() => {
       pipe = new EncodeURIComponentPipe(); 
    });
    
    it('Should return the value unchanged', () => {
       
       expect(pipe.transform(1)).toEqual(1); 
    });
   
});