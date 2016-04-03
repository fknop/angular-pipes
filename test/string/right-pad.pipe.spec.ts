import { RightPadPipe } from '../../index';
        
import {describe, it, beforeEach, expect} from 'angular2/testing';

describe('RightPadPipe', () => {
    
    let pipe: RightPadPipe;
    
    beforeEach(() => {
       pipe = new RightPadPipe(); 
    });
    
    
    it('Should return right pad string', () => {
       
        const result = pipe.transform('aaa', [4]);
        expect(result).toEqual('aaa ');
    });
    
    it('Should return right pad string', () => {
       
        const result = pipe.transform('aaa', [5]);
        expect(result).toEqual('aaa  ');
    });
    
    it('Should return right pad string', () => {
       
        const result = pipe.transform('aaa', [5, 'b']);
        expect(result).toEqual('aaabb');
    });
    
    
    it('Should return right pad string', () => {
       
        const result = pipe.transform('aaa', [5, 'bb']);
        expect(result).toEqual('aaabb');
    });
    
    it('Should return right pad string', () => {
       
        const result = pipe.transform('aaa', [2]);
        expect(result).toEqual('aaa');
    });
    
    
    it('Should return right pad string', () => {
       
        const result = pipe.transform('aaa', [4, 'bbb']);
        expect(result).toEqual('aaa');
    });
    
   
});