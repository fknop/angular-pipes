import { Pipe, PipeTransform  } from 'angular2/core';
import { isString } from '../utils/utils';


@Pipe({
    name: 'split'
})
export class SplitPipe implements PipeTransform {
    
    transform (input: any, [separator = ' ', limit]): any {
        
        if (!isString(input)) {
            return input;
        }
        
        return input.split(separator, limit);
    }
}