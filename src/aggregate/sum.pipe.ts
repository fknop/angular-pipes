import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { isArray, sum } from '../utils/utils';

@Pipe({ name: 'sum' })
export class SumPipe implements PipeTransform {
  transform(input: any): any {
    return !isArray(input) ? input : sum(input);
  }
}

@NgModule({
  declarations: [SumPipe],
  exports: [SumPipe],
})
export class NgSumPipeModule {}
