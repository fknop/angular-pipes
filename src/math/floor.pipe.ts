import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { createRound, isString } from '../utils/utils';

@Pipe({
  name: 'floor',
})
export class FloorPipe implements PipeTransform {
  transform(value: any, precision: any = 0, radix = 10): any {
    let _precision = precision;
    if (isString(_precision)) {
      _precision = parseInt(_precision, radix);
    }

    return createRound('floor')(value, _precision);
  }
}

@NgModule({
  declarations: [FloorPipe],
  exports: [FloorPipe],
})
export class NgFloorPipeModule {}
