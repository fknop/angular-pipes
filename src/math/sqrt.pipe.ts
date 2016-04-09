import { Pipe, PipeTransform  } from 'angular2/core';
import { isNumberFinite } from '../utils/utils';

@Pipe({
    name: 'sqrt'
})
export class SqrtPipe implements PipeTransform {
    
    transform (input: any): any {
        
        if (!isNumberFinite(input)) {
            return "NaN";
        }
       
        return Math.sqrt(input);
    }
}