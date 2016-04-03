import { Pipe, PipeTransform  } from 'angular2/core';


@Pipe({
    name: 'mean',
    pure: false
})
export class MeanPipe implements PipeTransform {
    
    transform (numbers: Array<number>): number {
        
        if (!Array.isArray(numbers)) {
            throw new TypeError('MeanPipe: value must be an array');
        }
        
        const count = numbers.length;
        
        if (count === 0) {
            return undefined;
        }
        
        let total = 0;
        
        numbers.forEach((value) => {
            
            total += value;
        });
        
        return (total / count);
    }
}