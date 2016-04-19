import { Pipe, PipeTransform  } from 'angular2/core';
import { isArray } from '../utils/utils';

// http://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array-in-javascript
const shuffle = function (input: any): any {
    
    if (!isArray(input)) {
        return input;
    }
    
    const copy = [...input];
    
    for (let i = copy.length; i; --i) {
        const j = Math.floor(Math.random() * i);
        const x = copy[i - 1];
        copy[i - 1] = copy[j];
        copy[j] = x;
    }
    
    return copy;
}

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