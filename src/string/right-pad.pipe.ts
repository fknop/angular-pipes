import { Pipe, PipeTransform  } from 'angular2/core';
import { rightPad, isString } from '../utils/utils';


@Pipe({
    name: 'rightpad'
})
export class RightPadPipe implements PipeTransform {
    
    transform (input: any, [length = 0, character = ' ']: any[]): any {
        
        if (!isString(input)) {
            return input;
        }
        
        return rightPad(input, length, character);
    }
}