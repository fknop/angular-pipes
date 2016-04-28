import { RepeatPipe } from '../../index';
        
import {describe, it, beforeEach, expect} from 'angular2/testing';

describe('RepeatPipe', () => {
    
    let pipe: RepeatPipe;
    
    beforeEach(() => {
       pipe = new RepeatPipe(); 
    });
    
    it('Should do nothing', () => {
       
       expect(pipe.transform('a', 1, '')).toEqual('aa');
    });
    
    it('Should repeat two times', () => {
       
       expect(pipe.transform('a', 2, '')).toEqual('aaa');
    });
    
    it('Should repeat two times with space', () => {
       
       expect(pipe.transform('a', 2, ' ')).toEqual('a a a');
    });


    it('Should return the value unchanged', () => {
       
       expect(pipe.transform(1, null)).toEqual(1); 
    });
   
});