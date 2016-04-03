import { Pipe, PipeTransform  } from 'angular2/core';


@Pipe({
    name: 'empty',
    pure: false
})
export class EmptyPipe implements PipeTransform {
    
    transform (array: Array<any>): boolean {
        
        if (!Array.isArray(array)) {
            throw new TypeError('EmptyPipe: value is not an array');
        }
        
        return array.length === 0;
    }
}