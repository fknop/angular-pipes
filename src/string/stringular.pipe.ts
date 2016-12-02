// idea from https://github.com/a8m/angular-filter

import {Pipe, PipeTransform} from '@angular/core';
import {isString, isUndefined} from '../utils/utils';

@Pipe({
    name: 'stringular'
})
export class StringularPipe implements PipeTransform {

    transform(input: string, ...args: any[]): string {

        return input.replace(/{(\d+)}/g, (match, number) => isUndefined(args[number]) ? match : args[number]);
    }
}