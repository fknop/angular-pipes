import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { isArray, isDeepObject, unwrapDeep } from '../utils/utils';

@Pipe({
  name: 'merge',
})
export class MergePipe implements PipeTransform {
  transform(a?: any, b?: any): any {
    a = a === null ? [] : a;
    b = b === null ? [] : b;
    if ((!isArray(a) && !isDeepObject(a)) || !isArray(b)) {
      return [];
    }

    if (isDeepObject(a)) {
      const unwrapped = unwrapDeep(a);
      if (!isArray(unwrapped)) {
        return [];
      }

      return []
        .concat(unwrapped)
        .concat(b);
    }

    return []
      .concat(a)
      .concat(b);
  }
}

@NgModule({
  declarations: [MergePipe],
  exports: [MergePipe],
})
export class NgMergePipeModule {}
