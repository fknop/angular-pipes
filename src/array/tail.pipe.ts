import { Pipe, PipeTransform  } from 'angular2/core';


@Pipe({
    name: 'tail',
    pure: false
})
export class TailPipe implements PipeTransform {
    
    transform (array: Array<any>): Array<any> {
        
        if (!Array.isArray(array)) {
            throw new TypeError('TailPipe: value is not an array');
        }
        
        if (array.length <= 1) {
            return [];
        }
        
        return array.slice(1, array.length);
    }
}