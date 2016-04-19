import { Pipe, PipeTransform } from 'angular2/core';
import { isString, upperFirst } from '../utils/utils';

@Pipe({
    name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {
    transform(input: any, [all = false]) : any {
        
        if (!isString(input)) {
            return input;
        }
        
        if (!all) {
            return upperFirst(input.toLowerCase());
        }
        else {
            return input.toLowerCase()
                        .split(' ')
                        .map((value: string) => upperFirst(value))
                        .join(' ');
        }
    }
}