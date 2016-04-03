import { Pipe, PipeTransform  } from 'angular2/core';


@Pipe({
    name: 'test'
})
export class TestPipe implements PipeTransform {
    
    transform (value: string, [pattern, flag]: any[]): boolean {
        
        if (typeof value !== 'string') {
            throw new TypeError('TestPipe: value must be a string');
        }
        
        const regexp = new RegExp(pattern, flag);
        
        return regexp.test(value);
    }
}