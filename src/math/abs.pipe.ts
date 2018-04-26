import { Pipe, PipeTransform  } from '@angular/core';
import { isNumberFinite } from '../utils/utils';

@Pipe({
  name: 'abs'
})
export class AbsPipe implements PipeTransform {
  
  transform (input: any): any {
    
    if (!isNumberFinite(input)) {
      return 'NaN';
    }
    
    return Math.abs(input);
  }
}