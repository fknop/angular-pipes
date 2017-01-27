import { Pipe, PipeTransform } from '@angular/core';
import { isString, isUndefined } from '../utils/utils';

@Pipe({
	name: 'reverseStr'
})
export class ReverseStrPipe implements PipeTransform {

    transform(input: string): string {

        if (!isString(input) || isUndefined(input)) {
            return input;
        }

		return input.split('').reverse().join('');
    }
}
