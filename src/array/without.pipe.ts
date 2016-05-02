import { Pipe, PipeTransform  } from 'angular2/core';
import { isArray, isDeepObject, unwrapDeep, deepIndexOf } from '../utils/utils';

@Pipe({
    name: 'without',
    pure: false
})
export class WithoutPipe implements PipeTransform {
    
    transform (input: any, ...args: any[]): any {
        
        if (!isArray(input) && !isDeepObject(input)) {
            return input;
        }
        
        if (isDeepObject(input)) {
            const unwrappedInput = unwrapDeep(input);
            if (!isArray(unwrappedInput)) {
                return unwrappedInput;
            }
            
            return unwrappedInput.filter((value: any, index: number) => 
                deepIndexOf(unwrappedInput, value) === -1
            );
        }
        
        
        return input.filter((value: any, index: number) => args.indexOf(value) === -1);
    }
}