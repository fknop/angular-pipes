import { Pipe, PipeTransform } from 'angular2/core';
import { isNumberFinite } from '../utils/utils';

@Pipe({
    name: 'degrees'
})
export class DegreesPipe {
    
    
    transform (input: any): any {
        
        if (!isNumberFinite(input)) {
            return NaN;
        }
        
        return (input * 180) / Math.PI;
        
    }
}