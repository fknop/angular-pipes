import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { isNumberFinite } from '../utils/utils';

@Pipe({
  name: 'random',
})
export class RandomPipe implements PipeTransform {
  transform(input: any, min = 0, max = 1): number {
    if (!isNumberFinite(min) || !isNumberFinite(max)) {
      return input;
    }

    if (min > max) {
      max = min;
      min = 0;
    }

    return Math.random() * (max - min) + min;
  }
}

@NgModule({
  declarations: [RandomPipe],
  exports: [RandomPipe],
})
export class NgRandomPipeModule {}
