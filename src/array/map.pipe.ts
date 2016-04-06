import { Pipe, PipeTransform  } from 'angular2/core';
import { isArray } from '../utils/utils';

@Pipe({
    name: 'map',
    pure: false
})
export class MapPipe implements PipeTransform {
    
    transform (input: any, [fn]): any {
        
        if (!isArray(input)) {
            return input
        }
        
        if (!fn) {
            fn = function (item: any) { return item };
        }
        
        return input.map(fn);
    }
}