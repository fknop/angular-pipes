import { Pipe, PipeTransform  } from 'angular2/core';
import { pad } from '../utils/utils';


@Pipe({
    name: 'pad'
})
export class PadPipe implements PipeTransform {
    
    transform (value: string, [length = 0, character = ' ']: any[]): string {
        
        return pad(value, length, character);
    }
}