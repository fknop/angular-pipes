import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { createRound, isString } from '../utils/utils';

@Pipe({
  name: 'ceil',
})
export class CeilPipe implements PipeTransform {
  transform(value: any, precision: any = 0): any {
    if (isString(precision)) {
      precision = parseInt(precision);
    }

    return createRound('ceil')(value, precision);
  }
}

@NgModule({
  declarations: [CeilPipe],
  exports: [CeilPipe],
})
export class NgCeilPipeModule {}
