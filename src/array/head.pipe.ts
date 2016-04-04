import { Pipe, PipeTransform  } from 'angular2/core';
import { isArray } from '../utils/utils';
import { arrayError } from '../utils/error';

@Pipe({
    name: 'head',
    pure: false
})
export class HeadPipe implements PipeTransform {
    
    transform (array: Array<any>): any {
        
        if (!isArray(array)) {
            throw arrayError('HeadPipe');
        }
        
        // Will return undefined if length is 0
        return array[0];
    }
}