import { Pipe, PipeTransform  } from 'angular2/core';
import { isArray } from '../utils/utils';
import { arrayError } from '../utils/error';

@Pipe({
    name: 'last',
    pure: false
})
export class LastPipe implements PipeTransform {
    
    transform (array: Array<any>): any {
        
        if (!isArray(array)) {
            throw arrayError('LastPipe');
        }
        
        const length = array.length;
        if (array.length === 0) {
            return undefined;
        }
        
        return array[length - 1];
    }
}