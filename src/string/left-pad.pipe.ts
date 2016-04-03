import { Pipe, PipeTransform  } from 'angular2/core';
import { leftPad } from '../utils/utils';


@Pipe({
    name: 'leftpad'
})
export class LeftPadPipe implements PipeTransform {
    
    transform (value: string, [length = 0, character = ' ']: any[]): string {
        
        return leftPad(value, length, character);
    }
}