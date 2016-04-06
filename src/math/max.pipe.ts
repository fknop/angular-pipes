import { Pipe, PipeTransform  } from 'angular2/core';
import { isArray } from '../utils/utils';

@Pipe({
    name: 'max',
    pure: false
})
export class MaxPipe implements PipeTransform {
    
    transform (input: any): any {
        
        if (!isArray(input)) {
            return input;
        }
        
        if (input.length === 0) {
            return undefined;
        }
        
        let max = input[0];
        
        input.forEach((value: any) => {
            
            if (max < value) {
                max = value;
            }
        });
        
        return max;
    }
}