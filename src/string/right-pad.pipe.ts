import { Pipe, PipeTransform  } from 'angular2/core';
import { rightPad } from '../utils/utils';


@Pipe({
    name: 'rightpad'
})
export class RightPadPipe implements PipeTransform {
    
    transform (value: string, [length = 0, character = ' ']: any[]): string {
        
        return rightPad(value, length, character);
    }
}