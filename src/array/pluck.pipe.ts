import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { isArray, getProperty } from '../utils/utils';

@Pipe({
  name: 'pluck',
})
export class PluckPipe implements PipeTransform {
  transform(input: any, key: string): any {
    if (!isArray(input) || !key) {
      return input;
    }

    return input.map((value: any) => {
      return getProperty(value, key);
    });
  }
}

@NgModule({
  declarations: [PluckPipe],
  exports: [PluckPipe],
})
export class NgPluckPipeModule {}
