import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { isArray } from '../utils/utils';

@Pipe({
  name: 'reverse',
})
export class ReversePipe implements PipeTransform {
  transform(input: any): any {
    if (!isArray(input)) {
      return input;
    }

    return [...input].reverse();
  }
}

@NgModule({
  declarations: [ReversePipe],
  exports: [ReversePipe],
})
export class NgReversePipeModule {}
