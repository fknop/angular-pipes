import { Pipe, PipeTransform } from 'angular2/core';
import { isString } from '../utils/utils';

@Pipe({
    name: 'encodeURIComponent'
})
export class EncodeURIComponentPipe {
    
    transform (input: any) {
        
        if (!isString(input)) {
            return input;
        }
        
        return encodeURIComponent(input);
    }
}