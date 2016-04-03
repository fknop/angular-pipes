import { Pipe, PipeTransform  } from 'angular2/core';


@Pipe({
    name: 'head',
    pure: false
})
export class HeadPipe implements PipeTransform {
    
    transform (array: Array<any>): any {
        
        if (!Array.isArray(array)) {
            throw new TypeError('HeadPipe: value is not an array');
        }
        
        // Will return undefined if length is 0
        return array[0];
    }
}