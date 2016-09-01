import { Pipe, PipeTransform  } from '@angular/core';
import { isNull,
         isNil,
         isUndefined, 
         isFunction,
         isArray,
         isString,
         isObject,
         isNumber } from '../utils/utils';

@Pipe({
    name: 'null'
})
export class IsNullPipe implements PipeTransform {
    
    transform (value: any): boolean {
        
        return isNull(value);
    }
}

@Pipe({
    name: 'undefined'
})
export class IsUndefinedPipe implements PipeTransform {
    
    transform (value: any): boolean {
        
        return isUndefined(value);
    }
}

@Pipe({
    name: 'nil'
})
export class IsNilPipe implements PipeTransform {
    
    transform (value: any): boolean {
        
        return isNil(value);
    }
}

@Pipe({
    name: 'function'
})
export class IsFunctionPipe implements PipeTransform {
    
    transform (value: any): boolean {
        
        return isFunction(value);
    }
}

@Pipe({
    name: 'number'
})
export class IsNumberPipe implements PipeTransform {
    
    transform (value: any): boolean {
        
        return isNumber(value);
    }
}

@Pipe({
    name: 'string'
})
export class IsStringPipe implements PipeTransform {
    
    transform (value: any): boolean {
        
        return isString(value);
    }
}


@Pipe({
    name: 'array'
})
export class IsArrayPipe implements PipeTransform {
    
    transform (value: any): boolean {
        
        return isArray(value);
    }
}

@Pipe({
    name: 'object'
})
export class IsObjectPipe implements PipeTransform {
    
    transform (value: any): boolean {
        
        return isObject(value);
    }
}


@Pipe({
    name: 'defined'
})
export class IsDefinedPipe implements PipeTransform {
    
    transform (value: any): boolean {
        
        return !isUndefined(value);
    }
}

