import { Pipe, PipeTransform  } from 'angular2/core';
import { isArray, isFunction } from '../utils/utils';
import { arrayError } from '../utils/error';

@Pipe({
    name: 'where',
    pure: false
})
export class WherePipe implements PipeTransform {
    
    
    /** 
     * Support a function or a value or the shorthand ['key', value] like the lodash shorthand.
     */
    transform (array: Array<any>, [fn]): any {
        
        if (!isArray(array)) {
            throw arrayError('WherePipe');
        }
        
        if (isFunction(fn)) {
            return array.filter(fn);
        }
        else if (isArray(fn)) {
            const [key, value] = fn;
            return array.filter((item) => item[key] === value);
        }
        else if (fn) {
            return array.filter((item) => item === fn);
        }
        else {
            return array;
        }
        
    }
}