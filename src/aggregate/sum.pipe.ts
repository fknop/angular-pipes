import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { isArray, sum } from '../utils/utils';

@Pipe({ name: 'sum' })
export class SumPipe implements PipeTransform {
  transform(input: any, defaultValue?: number): any {
    return !isArray(input) ? input + (defaultValue ? defaultValue : 0) : sum(input, defaultValue);
  }
}

@NgModule({
  declarations: [SumPipe],
  exports: [SumPipe],
})
export class NgSumPipeModule { }
