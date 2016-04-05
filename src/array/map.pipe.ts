import { Pipe, PipeTransform  } from 'angular2/core';
import { noop, isArray } from '../utils/utils';
import { arrayError } from '../utils/error';

@Pipe({
    name: 'map',
    pure: false
})
export class MapPipe implements PipeTransform {
    
    transform (array: Array<any>, [fn]): any {
        
        if (!isArray(array)) {
            throw arrayError('MapPipe');
        }
        
        if (!fn) {
            fn = function (item: any) { return item };
        }
        
        return array.map(fn);
    }
}