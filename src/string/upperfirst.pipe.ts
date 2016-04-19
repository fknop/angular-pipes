import { Pipe, PipeTransform } from 'angular2/core';
import { isString, upperFirst } from '../utils/utils';

@Pipe({
    name: 'upperfirst'
})
export class UpperFirst implements PipeTransform {
    transform(input: any) : any {
        
        if (!isString(input)) {
            return input;
        }
        
        return upperFirst(input);
    }
}