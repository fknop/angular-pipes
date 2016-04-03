import { Pipe, PipeTransform  } from 'angular2/core';


@Pipe({
    name: 'match'
})
export class MatchPipe implements PipeTransform {
    
    transform (value: string, [pattern, flag]: any[]): any {
        
        if (typeof value !== 'string') {
            throw new TypeError('MatchPipe: value must be a string');
        }
        
        const regexp = new RegExp(pattern, flag);
        
        return value.match(regexp);
    }
}