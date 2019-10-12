import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { createRound, isString } from '../utils/utils';

@Pipe({
  name: 'round',
})
export class RoundPipe implements PipeTransform {
  transform(value: any, precision: any = 0, radix = 10): any {
    let _precision = precision;
    if (isString(precision)) {
      _precision = parseInt(precision, radix);
    }

    return createRound('round')(value, _precision);
  }
}

@NgModule({
  declarations: [RoundPipe],
  exports: [RoundPipe],
})
export class NgRoundPipeModule {}
