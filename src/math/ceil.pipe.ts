import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { createRound, isString } from '../utils/utils';

@Pipe({
  name: 'ceil',
})
export class CeilPipe implements PipeTransform {
  transform(value: any, precision: any = 0, radix = 10): any {
    let _precision = precision;
    if (isString(_precision)) {
      _precision = parseInt(_precision, radix);
    }

    return createRound('ceil')(value, _precision);
  }
}

@NgModule({
  declarations: [CeilPipe],
  exports: [CeilPipe],
})
export class NgCeilPipeModule {}
