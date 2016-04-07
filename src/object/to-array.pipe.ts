import { Pipe, PipeTransform  } from 'angular2/core';
import { isObject } from '../utils/utils';


@Pipe({
    name: 'toArray',
    pure: false
})
export class ToArrayPipe implements PipeTransform {
    
    transform (input: any): any {
        
        if (!isObject(input)) {
            return input;
        }
        
        return Object.keys(input).map((value) => input[value]);
    }
}