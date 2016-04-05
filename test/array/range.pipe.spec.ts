import { RangePipe } from '../../index';
import {describe, it, beforeEach, expect} from 'angular2/testing';

describe('HeadPipe', () => {
    
    let pipe: RangePipe;
    
    beforeEach(() => {
       pipe = new RangePipe(); 
    });
    
    it('Should return a range from 1 to 10', () => {
       
       expect(pipe.transform([], [10, 1])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); 
    });
    
    it('Should return a range from 0 to 4', () => {
       
       expect(pipe.transform([], [5, 0])).toEqual([0, 1, 2, 3, 4]); 
    });
    
    it('Should return a range from -2 to +2', () => {
       
       expect(pipe.transform([], [5, -2])).toEqual([-2, -1, 0, 1, 2]); 
    });
    
})