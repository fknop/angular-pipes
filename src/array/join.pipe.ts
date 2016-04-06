import { Pipe, PipeTransform  } from 'angular2/core';
import { isArray } from '../utils/utils';

@Pipe({
    name: 'join',
    pure: false
})
export class JoinPipe implements PipeTransform {
    
    transform (input: any, [character = '']): any {
        
        if (!isArray(input)) {
            return input;
        }
        
        return input.join(character);
    }
}