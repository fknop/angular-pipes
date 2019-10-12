import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { shuffle } from '../utils/utils';

@Pipe({
  name: 'shuffle',
})
export class ShufflePipe implements PipeTransform {
  transform(input: any): any {
    return shuffle(input);
  }
}

@NgModule({
  declarations: [ShufflePipe],
  exports: [ShufflePipe],
})
export class NgShufflePipeModule {}
