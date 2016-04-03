import { Pipe, PipeTransform  } from 'angular2/core';
import { createRound } from '../utils/utils';

@Pipe({
    name: 'ceil'
})
export class CeilPipe implements PipeTransform {
    
    transform (value: number, [precision = 0]: Array<any>): number {
        
        if (typeof precision === 'string') {
            precision = parseInt(precision);
        }
        
        const ceil = createRound('ceil');
        
        return ceil(value, precision);
    }
}