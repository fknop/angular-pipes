import { Pipe, PipeTransform  } from 'angular2/core';
import { isArray } from '../utils/utils';
import { arrayError } from '../utils/error';

@Pipe({
    name: 'join',
    pure: false
})
export class JoinPipe implements PipeTransform {
    
    transform (array: Array<any>, [character = '']): string {
        
        if (!isArray(array)) {
            throw arrayError('JoinPipe');
        }
        
        
        return array.join(character);
    }
}