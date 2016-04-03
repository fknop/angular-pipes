import { Pipe, PipeTransform  } from 'angular2/core';


@Pipe({
    name: 'replace'
})
export class ReplacePipe implements PipeTransform {
    
    transform (value: string, [pattern, replacement]: any[]): string {
        
        if (!pattern || !replacement) {
            throw new Error(`ReplacePipe: usage: {{ value | replace: pattern : replacement }}`);
        }
        
        return value.replace(pattern, replacement);
    }
}