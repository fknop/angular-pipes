import { Pipe, PipeTransform  } from 'angular2/core';


@Pipe({
    name: 'max',
    pure: false
})
export class MaxPipe implements PipeTransform {
    
    transform (numbers: Array<number>): number {
        
        
        if (!Array.isArray(numbers)) {
            throw new TypeError('MaxPipe: value must be an array');
        }
        
        if (numbers.length === 0) {
            return undefined;
        }
        
        let max = numbers[0];
        
        numbers.forEach((value) => {
            
            if (max < value) {
                max = value;
            }
        });
        
        return max;
    }
}