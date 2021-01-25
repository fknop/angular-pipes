// Inspired from https://github.com/a8m/angular-filter/blob/master/src/_filter/string/truncate.js

import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { isString, isUndefined } from '../utils/utils';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(input: any, length?: number, suffix = '', preserve = false): any {
    if (!isString(input)) {
      return input;
    }

    const _length = isUndefined(length) ? input.length : length;

    if (input.length <= _length) {
      return input;
    }

    let index = _length;

    if (preserve) {
      index = input.indexOf(' ', _length) === -1 ? input.length : input.indexOf(' ', _length);
    }

    return input.substring(0, index) + suffix;
  }
}

@NgModule({
  declarations: [TruncatePipe],
  exports: [TruncatePipe],
})
export class NgTruncatePipeModule {}
