import { Pipe, PipeTransform  } from 'angular2/core';


@Pipe({
    name: 'last',
    pure: false
})
export class LastPipe implements PipeTransform {
    
    transform (array: Array<any>): any {
        
        if (!Array.isArray(array)) {
            throw new TypeError('LastPipe: value is not an array');
        }
        
        const length = array.length;
        if (array.length === 0) {
            return undefined;
        }
        
        return array[length - 1];
    }
}