import { Pipe, PipeTransform  } from 'angular2/core';
import { isArray } from '../utils/utils';
import { arrayError } from '../utils/error';

@Pipe({
    name: 'tail',
    pure: false
})
export class TailPipe implements PipeTransform {
    
    transform (array: Array<any>): Array<any> {
        
        if (!isArray(array)) {
            throw arrayError('TailPipe');
        }
        
        if (array.length <= 1) {
            return [];
        }
        
        return array.slice(1, array.length);
    }
}