import { Pipe, PipeTransform } from 'angular2/core';
import { isArray } from '../utils/utils';

@Pipe({
    name: 'reverse',
    pure: false
})
export class ReversePipe implements PipeTransform {
    
    transform (input: any): any {
        
        if (!isArray(input)) {
            return input;
        }
        
        return [...input].reverse();
    }
}