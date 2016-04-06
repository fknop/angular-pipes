import { Pipe, PipeTransform  } from 'angular2/core';
import { isArray, sum } from '../utils/utils';

@Pipe({
    name: 'mean',
    pure: false
})
export class MeanPipe implements PipeTransform {
    
    transform (input: any): any {
        
        if (!isArray(input)) {
            return input;
        }
        
        const count = input.length;
        
        if (count === 0) {
            return undefined;
        }
        
        return sum(input) / count;
    }
}