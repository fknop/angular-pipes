import { WherePipe } from '../../index';
import {describe, it, beforeEach, expect} from 'angular2/testing';

describe('WherePipe', () => {
    
    let pipe: WherePipe;
    
    const array = [
        {
            a: 2,
            b: 3,
            d: { e : 4}
        },
        {
            a: 4,
            b: 3,
            d: { e : 8 }
        },
        {
            a: 3,
            b: 1,
            d: { e : 4}
        },
        {
            a: 4,
            b: 5,
            d: { e : 5}
        }
    ]
    
    beforeEach(() => {
       pipe = new WherePipe(); 
    });
    
    it ('Should return only the 1 values', () => {
       
       const fn = function (item) {
           return item === 1;
       } 
       
       expect(pipe.transform([1, 2, 3, 1, 1, 4], [fn])).toEqual([1, 1, 1]);
    });
    
    it('Should return the objects where a is 4', () => {
       
       const fn = function (item) {
           return item.a === 4;
       };
       
       expect(pipe.transform(array, [fn]))
            .toEqual([{
                a: 4,
                b: 3,
                d: { e : 8 }
            },
            {
                a: 4,
                b: 5,
                d: { e : 5}
            }
        ]); 
    });
    
    it('Should return the objects where a is 4', () => {

       expect(pipe.transform(array, [['a', 4]]))
            .toEqual([{
                a: 4,
                b: 3,
                d: { e : 8 }
            },
            {
                a: 4,
                b: 5,
                d: { e : 5}
            }
        ]); 
    });
    
    it('Should return the objects where d.e is 4', () => {

       expect(pipe.transform(array, [['d.e', 4]]))
            .toEqual([{
                a: 2,
                b: 3,
                d: { e : 4 }
            },
            {
                a: 3,
                b: 1,
                d: { e : 4}
            }
        ]); 
    });
    
    
    it('Should return the value unchanged', () => {
       
       expect(pipe.transform('a', [null])).toEqual('a'); 
    });
    
});