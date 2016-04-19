import { Pipe, PipeTransform } from 'angular2/core';
import { isNumberFinite } from '../utils/utils';

@Pipe({
    name: 'random'
})
export class RandomPipe {
    
    transform (input: any, [min = 0, max = 1]): any {
        
        if (!isNumberFinite(min) || !isNumberFinite(max)) {
            return input;
        }
        
        if (min > max) {
            max = min;
            min = 0;
        }
        
        return Math.random() * (max - min) + min;
    }
}