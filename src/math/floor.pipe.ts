import { Pipe, PipeTransform  } from 'angular2/core';
import { createRound, isString } from '../utils/utils';

@Pipe({
    name: 'floor'
})
export class FloorPipe implements PipeTransform {
    
    transform (value: any, [precision = 0]: Array<any>): any {
        
        if (isString(precision)) {
            precision = parseInt(precision);
        }
        
        return createRound('floor')(value, precision);
    }
}