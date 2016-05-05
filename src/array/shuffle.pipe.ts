import { Pipe, PipeTransform  } from '@angular/core';
import { isArray, shuffle } from '../utils/utils';



@Pipe({
    name: 'shuffle',
    pure: false
})
export class ShufflePipe implements PipeTransform {
    
    transform (input: any): any {
        
        return shuffle(input);
    }
}

@Pipe({
    name: 'shufflePure',
    pure: true
})
export class ShufflePurePipe implements PipeTransform {
    
    transform (input: any): any {
        
        return shuffle(input);
    }
}