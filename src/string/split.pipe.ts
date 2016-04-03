import { Pipe, PipeTransform  } from 'angular2/core';


@Pipe({
    name: 'split'
})
export class SplitPipe implements PipeTransform {
    
    transform (value: string, [separator = ' ', limit]): Array<string> {
        
        if (typeof value !== 'string') {
            throw new TypeError('SplitPipe: value must be a string');
        }
        
        return value.split(separator, limit);
    }
}