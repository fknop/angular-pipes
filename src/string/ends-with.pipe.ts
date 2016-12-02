// idea from https://github.com/a8m/angular-filter

import {Pipe, PipeTransform} from '@angular/core';
import {isString, isUndefined} from '../utils/utils';

@Pipe({
    name: 'endsWith'
})
export class EndsWithPipe implements PipeTransform {

    transform(input: string, ends: string, csensitive?: boolean): any {

        let sensitive: boolean = csensitive || false,
            position: any;

        if (!isString(input) || isUndefined(ends)) {
            return input;
        }

        input = (sensitive) ? input : input.toLowerCase();
        position = input.length - ends.length;

        return input.indexOf((sensitive) ? ends : ends.toLowerCase(), position) !== -1;
    }
}