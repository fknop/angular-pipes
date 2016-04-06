import { Pipe, PipeTransform  } from 'angular2/core';
import { createRound, isString } from '../utils/utils';

@Pipe({
    name: 'ceil'
})
export class CeilPipe implements PipeTransform {
    
    transform (value: any, [precision = 0]: Array<any>): any {
        
        if (isString(precision)) {
            precision = parseInt(precision);
        }
        
        return createRound('ceil')(value, precision);
    }
}