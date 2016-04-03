import { Pipe, PipeTransform  } from 'angular2/core';


@Pipe({
    name: 'sum',
    pure: false
})
export class SumPipe implements PipeTransform {
    
    transform (numbers: Array<number>|number): number {
        
        return !Array.isArray(numbers) ?
               numbers : 
               numbers.reduce((previous, current) => previous + current, 0);
    }
}