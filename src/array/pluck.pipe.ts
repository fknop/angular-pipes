import { Pipe, PipeTransform  } from 'angular2/core';
import { isArray, getProperty } from '../utils/utils';

@Pipe({
    name: 'pluck',
    pure: false
})
export class PluckPipe implements PipeTransform {
    
    transform (input: any, [key]): any {
        
        if (!isArray(input) || !key) {
            return input;
        }
        
        return input.map((value: any) => {
            return getProperty(value, key); 
        });
    }
}