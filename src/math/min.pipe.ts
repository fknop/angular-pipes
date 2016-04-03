import { Pipe, PipeTransform  } from 'angular2/core';


@Pipe({
    name: 'min',
    pure: false
})
export class MinPipe implements PipeTransform {
    
    transform (numbers: Array<number>): number {
        
        
        if (!Array.isArray(numbers)) {
            throw new TypeError('MinPipe: value must be an array');
        }
        
        if (numbers.length === 0) {
            return undefined;
        }
        
        let min = numbers[0];
        
        numbers.forEach((value) => {
            
            if (min > value) {
                min = value;
            }
        });
        
        return min;
    }
}