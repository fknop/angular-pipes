import { Pipe, PipeTransform  } from 'angular2/core';


@Pipe({
    name: 'initial',
    pure: false
})
export class InitialPipe implements PipeTransform {
    
    transform (array: Array<any>): Array<any> {
        
        if (!Array.isArray(array)) {
            throw new TypeError('InitialPipe: value is not an array');
        }
        
        if (array.length <= 1) {
            return [];
        }
        
        return array.slice(0, array.length - 1);
    }
}