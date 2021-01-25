import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { getProperty, isArray, isUndefined } from '../utils/utils';

class GroupByResult<T> {
  value: Array<T>;
  key: any;
}

@Pipe({
  name: 'groupBy',
})
export class GroupByPipe implements PipeTransform {
  transform<T>(input: Array<T>, prop: string): Array<GroupByResult<T>> {
    if (!isArray(input)) {
      return input;
    }

    const arr: { [key: string]: Array<any> } = {};

    for (const value of input) {
      const field: any = getProperty(value, prop);

      if (isUndefined(arr[field])) {
        arr[field] = [];
      }

      arr[field].push(value);
    }

    return Object.keys(arr).map(key => ({ key, value: arr[key] }));
  }
}

@NgModule({
  declarations: [GroupByPipe],
  exports: [GroupByPipe],
})
export class NgGroupByPipeModule {}
