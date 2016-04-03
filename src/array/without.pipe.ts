import { Pipe, PipeTransform  } from 'angular2/core';


@Pipe({
    name: 'without',
    pure: false
})
export class WithoutPipe implements PipeTransform {
    
    transform (array: Array<any>, args: any[]): Array<any> {
        
        if (!Array.isArray(array)) {
            throw new TypeError('WithoutPipe: value is not an array');
        }
        
        const values: Array<any> = [];
        
        array.forEach((value) => {
           
           if (args.indexOf(value) === -1) {
               values.push(value);
           } 
        });
        
        return values;
    }
}