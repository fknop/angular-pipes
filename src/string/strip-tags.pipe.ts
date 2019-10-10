// idea from https://github.com/a8m/angular-filter

import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { isString, isUndefined } from '../utils/utils';

@Pipe({
  name: 'stripTags',
})
export class StripTagsPipe implements PipeTransform {
  transform(input: string): any {
    if (!isString(input) || isUndefined(input)) return input;

    return input.replace(/<\S[^><]*>/g, '');
  }
}

@NgModule({
  declarations: [StripTagsPipe],
  exports: [StripTagsPipe],
})
export class NgStripTagsPipeModule {}
