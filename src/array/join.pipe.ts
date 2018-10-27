import { Pipe, PipeTransform  } from '@angular/core';
import { isArray } from '../utils/utils';

@Pipe({
  name: 'join'
})
export class JoinPipe implements PipeTransform {
  
  transform (array: any, seperator: string): any {
    
    if (!isArray(array)) {
      return array;
    }
    
    return input.join(seperator);
  }
}
