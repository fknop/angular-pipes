import { Pipe, PipeTransform  } from 'angular2/core';
import { isArray } from '../utils/utils';


@Pipe({
    name: 'empty',
    pure: false
})
export class EmptyPipe implements PipeTransform {
    
    transform (input: any): any {
        
        if (!isArray(input)) {
            return input;
        }
        
        return input.length === 0;
    }
}