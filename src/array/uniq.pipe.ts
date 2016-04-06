import { Pipe, PipeTransform  } from 'angular2/core';
import { isArray } from '../utils/utils';

// Does not work with deep equal yet
@Pipe({
    name: 'uniq',
    pure: false
})
export class UniqPipe implements PipeTransform {
    
    transform (input: any): any {

        if (!isArray(input)) {
            return input;
        }
        
        return input.filter((value: any, index: number) => input.indexOf(value) === index);
    }
}