import { Pipe, PipeTransform  } from 'angular2/core';
import { isArray, getProperty } from '../utils/utils';
import { arrayError } from '../utils/error';

@Pipe({
    name: 'pluck',
    pure: false
})
export class PluckPipe implements PipeTransform {
    
    transform (array: Array<any>, [key]): Array<any> {
        
        if (!isArray(array)) {
            throw arrayError('PluckPipe');
        }
        
        if (!key) {
            return array;
        }
        
        return array.map((value) => {
            return getProperty(value, key); 
        });
    }
}