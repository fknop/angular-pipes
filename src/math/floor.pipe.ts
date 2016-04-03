import { Pipe, PipeTransform  } from 'angular2/core';
import { createRound } from '../utils/utils';

@Pipe({
    name: 'floor'
})
export class FloorPipe implements PipeTransform {
    
    transform (value: number, [precision = 0]: Array<any>): number {
        
        if (typeof precision === 'string') {
            precision = parseInt(precision);
        }
        
        const floor = createRound('floor');
        
        return floor(value, precision);
    }
}