import { Pipe, PipeTransform  } from 'angular2/core';
import { isArray, isObject, isString } from '../utils/utils';


@Pipe({
    name: 'count',
    pure: false
})
export class CountPipe implements PipeTransform {
    
    transform (input: any): any {
        
        if (!isArray(input) || !isObject(input) || !isString(input)) {
            return input;
        }
        
        if (isObject(input)) {
            return Object.keys(input).map((value) => input[value]).length;
        }
        
        return input.length;
    }
}