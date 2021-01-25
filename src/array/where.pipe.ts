import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { isArray, isFunction, getProperty } from '../utils/utils';

@Pipe({
  name: 'where',
})
export class WherePipe implements PipeTransform {
  /**
   * Support a function or a value or the shorthand ['key', value] like the lodash shorthand.
   */
  transform(input: any, fn: any): any {
    if (!isArray(input)) {
      return input;
    }

    if (isFunction(fn)) {
      return input.filter(fn);
    }
    if (isArray(fn)) {
      const [key, value] = fn;
      return input.filter((item: any) => getProperty(item, key) === value);
    }
    if (fn) {
      return input.filter((item: any) => item === fn);
    }

    return input;
  }
}

@NgModule({
  declarations: [WherePipe],
  exports: [WherePipe],
})
export class NgWherePipeModule {}
