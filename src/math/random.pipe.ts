import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { isNumberFinite } from '../utils/utils';

@Pipe({
  name: 'random',
})
export class RandomPipe implements PipeTransform {
  transform(input: any, min = 0, max = 1): any {
    let _min = min;
    let _max = max;
    if (!isNumberFinite(_min) || !isNumberFinite(_max)) {
      return input;
    }

    if (_min > _max) {
      _max = _min;
      _min = 0;
    }

    return Math.random() * (_max - _min) + _min;
  }
}

@NgModule({
  declarations: [RandomPipe],
  exports: [RandomPipe],
})
export class NgRandomPipeModule {}
