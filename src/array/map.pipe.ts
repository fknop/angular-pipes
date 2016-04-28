import { Pipe, PipeTransform  } from 'angular2/core';
import { isArray } from '../utils/utils';

@Pipe({
    name: 'map',
    pure: false
})
export class MapPipe implements PipeTransform {
    
    transform (input: any, fn: Function): any {
        
        if (!isArray(input) || !fn) {
            return input;
        }
        
        return input.map(fn);
    }
}