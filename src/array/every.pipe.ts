import { Pipe, PipeTransform  } from 'angular2/core';
import { isArray } from '../utils/utils';


const every = function (input: any, predicate: Function) {
    
        if (!isArray(input) || !predicate) {
            return input;
        }
        
        let result = true;
        let i = -1;
        
        while (++i < input.length && result) {
            result = predicate(input[i], i, input);
        }
        
        
        return result;
}


@Pipe({
    name: 'every',
    pure: false
})
export class EveryPipe implements PipeTransform {
    
    transform (input: any, predicate: Function): any {
        
        return every(input, predicate);
    }
}


@Pipe({
    name: 'everyPure',
    pure: true
})
export class EveryPurePipe implements PipeTransform {
    
    transform (input: any, predicate: Function): any {
        
        return every(input, predicate);
    }
}