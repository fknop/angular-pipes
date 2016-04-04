import { Pipe, PipeTransform  } from 'angular2/core';
import { isArray } from '../utils/utils';
import { arrayError } from '../utils/error';

@Pipe({
    name: 'initial',
    pure: false
})
export class InitialPipe implements PipeTransform {
    
    transform (array: Array<any>): Array<any> {
        
        if (!isArray(array)) {
            throw arrayError('InitialPipe');
        }
        
        if (array.length <= 1) {
            return [];
        }
        
        return array.slice(0, array.length - 1);
    }
}