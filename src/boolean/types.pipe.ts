import { Pipe, PipeTransform  } from 'angular2/core';


@Pipe({
    name: 'null'
})
export class IsNullPipe implements PipeTransform {
    
    transform (value: any): boolean {
        
        return value === null;
    }
}

@Pipe({
    name: 'undefined'
})
export class IsUndefinedPipe implements PipeTransform {
    
    transform (value: any): boolean {
        
        return typeof (value) === 'undefined';
    }
}

@Pipe({
    name: 'function'
})
export class IsFunctionPipe implements PipeTransform {
    
    transform (value: any): boolean {
        
        return typeof (value) === 'function';
    }
}

@Pipe({
    name: 'number'
})
export class IsNumberPipe implements PipeTransform {
    
    transform (value: any): boolean {
        
        return typeof (value) === 'number';
    }
}

@Pipe({
    name: 'string'
})
export class IsStringPipe implements PipeTransform {
    
    transform (value: any): boolean {
        
        return typeof (value) === 'string';
    }
}


@Pipe({
    name: 'array'
})
export class IsArrayPipe implements PipeTransform {
    
    transform (value: any): boolean {
        
        return Array.isArray(value);
    }
}

@Pipe({
    name: 'object'
})
export class IsObjectPipe implements PipeTransform {
    
    transform (value: any): boolean {
        
        return typeof (value) === 'object';
    }
}


@Pipe({
    name: 'defined'
})
export class IsDefinedPipe implements PipeTransform {
    
    transform (value: any): boolean {
        
        return typeof (value) !== 'undefined';
    }
}

export const NG2_TYPES_PIPES = [
    IsNullPipe,
    IsUndefinedPipe,
    IsFunctionPipe,
    IsNumberPipe,
    IsStringPipe,
    IsArrayPipe,
    IsObjectPipe,
    IsDefinedPipe
];