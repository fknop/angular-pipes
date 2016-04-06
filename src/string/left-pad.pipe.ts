import { Pipe, PipeTransform  } from 'angular2/core';
import { leftPad, isString } from '../utils/utils';


@Pipe({
    name: 'leftpad'
})
export class LeftPadPipe implements PipeTransform {
    
    transform (input: any, [length = 0, character = ' ']: any[]): any {
        
        if (!isString(input)) {
            return input;
        }
        
        return leftPad(input, length, character);
    }
}