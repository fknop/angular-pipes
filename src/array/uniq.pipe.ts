import { Pipe, PipeTransform  } from 'angular2/core';
import { isArray, isDeepObject, unwrapDeep, deepIndexOf } from '../utils/utils';

// Does not work with deep equal yet
@Pipe({
    name: 'uniq',
    pure: false
})
export class UniqPipe implements PipeTransform {
    
    transform (input: any): any {

        if (!isArray(input) && !isDeepObject(input)) {
            return input;
        }
        
        if (isDeepObject(input)) {
            const unwrappedInput = unwrapDeep(input);
            if (!isArray(unwrappedInput)) {
                return unwrappedInput;
            }
            
            return unwrappedInput.filter((value: any, index: number) => 
                deepIndexOf(unwrappedInput, value) === index
            );
        }
        
        return input.filter((value: any, index: number) => input.indexOf(value) === index);
    }
}