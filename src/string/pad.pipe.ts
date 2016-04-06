import { Pipe, PipeTransform  } from 'angular2/core';
import { pad, isString } from '../utils/utils';


@Pipe({
    name: 'pad'
})
export class PadPipe implements PipeTransform {
    
    transform (input: any, [length = 0, character = ' ']: any[]): any {
        
        if (!isString(input)) {
            return input;
        }
        
        return pad(input, length, character);
    }
}