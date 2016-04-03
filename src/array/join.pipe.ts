import { Pipe, PipeTransform  } from 'angular2/core';

@Pipe({
    name: 'join',
    pure: false
})
export class JoinPipe implements PipeTransform {
    
    transform (array: Array<any>, [character = '']): string {
        
        if (!Array.isArray(array)) {
            throw new TypeError('JoinPipe: value is not an array');
        }
        
        
        return array.join(character);
    }
}