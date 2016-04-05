import { Pipe, PipeTransform  } from 'angular2/core';
import { isArray } from '../utils/utils';
import { arrayError } from '../utils/error';

@Pipe({
    name: 'where'
})
export class RangePipe implements PipeTransform {
    
    transform (array: Array<any>, [size = 0, start = 1]): Array<any> {
        
        if (size === 0) {
            return [];
        }
        
        const range: number[] = [];
        for (let length = 0; length < size; ++length) {
            range.push(start++);
        }
        
        return range;
    }
}