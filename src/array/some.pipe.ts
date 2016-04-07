import { Pipe, PipeTransform  } from 'angular2/core';
import { isArray } from '../utils/utils';


@Pipe({
    name: 'some',
    pure: false
})
export class SomePipe implements PipeTransform {
    
    transform (input: any, [predicate]): any {
        
        if (!isArray(input) || !predicate) {
            return input;
        }
        
        let result = false;
        let i = -1;
        
        while (++i < input.length && !result) {
            result = predicate(input[i], i, input);
        }
        
        
        return result;
    }
}