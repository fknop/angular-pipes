// idea from https://github.com/a8m/angular-filter

import {Pipe, PipeTransform} from '@angular/core';
import {isString, isUndefined} from '../utils/utils';

@Pipe({
    name: 'startsWith'
})
export class StartsWithPipe implements PipeTransform {

    transform(input: string, start: string, csensitive: boolean): any {

        let sensitive = csensitive || false;

        if (!isString(input) || isUndefined(start))
            return input;

        input = (sensitive) ? input : input.toLowerCase();

        return !input.indexOf((sensitive) ? start : start.toLowerCase());
    }
}