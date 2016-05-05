import { Pipe, PipeTransform } from '@angular/core';
import { isNumberFinite, isInteger } from '../utils/utils';

@Pipe({
    name: 'radians'
})
export class RadiansPipe {
    
    transform (input: any): any {
        
        if (!isNumberFinite(input)) {
            return NaN;
        }
        
        return (input * Math.PI) / 180;
    }
}