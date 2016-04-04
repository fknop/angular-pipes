import { Pipe, PipeTransform  } from 'angular2/core';
import { isArray } from '../utils/utils';
import { arrayError } from '../utils/error';


@Pipe({
    name: 'empty',
    pure: false
})
export class EmptyPipe implements PipeTransform {
    
    transform (array: Array<any>): boolean {
        
        if (!isArray(array)) {
            throw arrayError('EmptyPipe');
        }
        
        return array.length === 0;
    }
}