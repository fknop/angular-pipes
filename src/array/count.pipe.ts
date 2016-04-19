import { Pipe, PipeTransform  } from 'angular2/core';
import { isArray, isObject, isString } from '../utils/utils';

const count = function (input: any): any {
    
    if (!isArray(input) || !isObject(input) || !isString(input)) {
        return input;
    }
    
    if (isObject(input)) {
        return Object.keys(input).map((value) => input[value]).length;
    }
    
    return input.length;
}

@Pipe({
    name: 'count',
    pure: false
})
export class CountPipe implements PipeTransform {
    
    transform (input: any): any {
        
        return count(input);
    }
}

@Pipe({
    name: 'countPure',
    pure: true
})
export class CountPurePipe implements PipeTransform {
    
    transform (input: any): any {
        
        return count(input);
    }
}