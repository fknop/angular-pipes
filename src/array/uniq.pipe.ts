import { Pipe, PipeTransform  } from 'angular2/core';


// Does not work with deep equal yet
@Pipe({
    name: 'uniq',
    pure: false
})
export class UniqPipe implements PipeTransform {
    
    transform (values: Array<any>): Array<any> {

        if (!Array.isArray(values)) {
            throw new TypeError('UniqPipe: value is not an array');
        }
        
        const uniq: Array<any> = new Array<any>();
        
        values.forEach((value) => {
            
            if (uniq.indexOf(value) === -1) {
                uniq.push(value);
            }
        });
        
        return uniq;
    }
}