import { Pipe, PipeTransform  } from 'angular2/core';
import { isArray } from '../utils/utils';

@Pipe({
    name: 'where'
})
export class RangePipe implements PipeTransform {
    
    transform (input: any, [size = 0, start = 1, step = 1]): any {
        
        const range: number[] = [];
        for (let length = 0; length < size; ++length) {
            range.push(start);
            start += step;
        }
        
        return range;
    }
}