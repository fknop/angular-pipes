import { Pipe, PipeTransform  } from 'angular2/core';
import { isNumberFinite, isPositive, isInteger, toDecimal } from '../utils/utils';


@Pipe({
    name: 'bytes'
})
export class BytesPipe implements PipeTransform {
    
    transform (value: number, [decimal = 0]): string {
        
        const formats = [
            { name: 'B', max: 1024 },
            { name: 'KB', max: 1048576 },
            { name: 'MB', max: 1073741824 },
            { name: 'GB', max: Number.MAX_VALUE }
        ];
        
        if (isNumberFinite(value) && 
            isNumberFinite(decimal) && 
            isInteger(decimal) && 
            isPositive(decimal)) {
                
                for (let i = 0; i < formats.length; ++i) {
                    const format = formats[i];
                    if (value < format.max) {
                        
                        const bytes = formats[i - 1] ?
                                      toDecimal(value / formats[i - 1].max, decimal) : 
                                      toDecimal(value, decimal);
                                      
                        return `${bytes} ${format.name}`;
                    } 
                    
                }
            
        }
        else {
            throw new TypeError(`BytesPipe: bytes or decimal is in the wrong format - 
                                 bytes must be a number, decimal must be an integer`)
        }
        
      
    }
}