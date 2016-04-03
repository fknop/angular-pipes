import { Pipe, PipeTransform  } from 'angular2/core';
import { createRound } from '../utils/utils';

@Pipe({
    name: 'round'
})
export class RoundPipe implements PipeTransform {
    
    transform (value: number, [precision = 0]: Array<any>): number {
        
        if (typeof precision === 'string') {
            precision = parseInt(precision);
        }
        
        const round = createRound('round');
        
        return round(value, precision);
    }
}