import { Pipe, PipeTransform  } from 'angular2/core';
import { isArray } from '../utils/utils';
import { arrayError } from '../utils/error';

@Pipe({
    name: 'without',
    pure: false
})
export class WithoutPipe implements PipeTransform {
    
    transform (array: Array<any>, args: any[]): Array<any> {
        
        if (!isArray(array)) {
            throw arrayError('WithoutPipe');
        }
        
        const values: Array<any> = [];
        
        array.forEach((value) => {
           
           if (args.indexOf(value) === -1) {
               values.push(value);
           } 
        });
        
        return values;
    }
}