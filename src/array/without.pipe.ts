import { Pipe, PipeTransform  } from 'angular2/core';
import { isArray } from '../utils/utils';

@Pipe({
    name: 'without',
    pure: false
})
export class WithoutPipe implements PipeTransform {
    
    transform (input: any, ...args: any[]): any {
        
        if (!isArray(input)) {
            return input;
        }
        
        return input.filter((value: any, index: number) => args.indexOf(value) === -1);
    }
}