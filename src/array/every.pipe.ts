import { Pipe, PipeTransform  } from 'angular2/core';
import { isArray } from '../utils/utils';


@Pipe({
    name: 'every',
    pure: false
})
export class EveryPipe implements PipeTransform {
    
    transform (input: any, [predicate]): any {
        
        if (!isArray(input) || !predicate) {
            return input;
        }
        
        let result = true;
        let i = -1;
        
        while (++i < input.length && result) {
            result = predicate(input[i], i, input);
        }
        
        
        return result;
    }
}