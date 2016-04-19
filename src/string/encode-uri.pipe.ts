import { Pipe, PipeTransform } from 'angular2/core';
import { isString } from '../utils/utils';

@Pipe({
    name: 'encodeURI'
})
export class EncodeURIPipe {
    
    transform (input: any) {
        
        if (!isString(input)) {
            return input;
        }
        
        return encodeURI(input);
    }
}