import { Pipe, PipeTransform  } from 'angular2/core';
import { isArray } from '../utils/utils';


const empty = function (input: any): any {
    
    if (!isArray(input)) {
        return input;
    }
        
    return input.length === 0;
}

@Pipe({
    name: 'empty',
    pure: false
})
export class EmptyPipe implements PipeTransform {
    
    transform (input: any): any {
        
        return empty(input);
    }
}

@Pipe({
    name: 'emptyPure',
    pure: true
})
export class EmptyPurePipe implements PipeTransform {
    
    transform (input: any): any {
        
        return empty(input);
    }
}
