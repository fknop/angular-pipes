import { Pipe, PipeTransform  } from '@angular/core';
import { every } from '../utils/utils';



@Pipe({
    name: 'every'
})
export class EveryPurePipe implements PipeTransform {
    
    transform (input: any, predicate: Function): any {
        
        return every(input, predicate);
    }
}