import { Pipe, PipeTransform  } from '@angular/core';
import { isNumberFinite } from '../utils/utils';

@Pipe({
  name: 'ordinal'
})
export class OrdinalPipe implements PipeTransform {
  
    transform (input: any): any {

    if (!isNumberFinite(input)) {
        return 'NaN';
    }

    var cardinal = input.toString().charAt(input.toString().length - 1);
    if (cardinal == "1")
        return input + "st";
    else if (cardinal == "2")
        return input + "nd";
    else if (cardinal == "3")
        return input + "rd";
    else 
        return input + "th";
  }
}