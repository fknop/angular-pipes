import { Pipe, PipeTransform  } from 'angular2/core';
import { isArray } from '../utils/utils';
import { arrayError } from '../utils/error';

// Does not work with deep equal yet
@Pipe({
    name: 'uniq',
    pure: false
})
export class UniqPipe implements PipeTransform {
    
    transform (values: Array<any>): Array<any> {

        if (!isArray(values)) {
            throw arrayError('UniqPipe');
        }
        
        const uniq: Array<any> = new Array<any>();
        
        values.forEach((value) => {
            
            if (uniq.indexOf(value) === -1) {
                uniq.push(value);
            }
        });
        
        return uniq;
    }
}