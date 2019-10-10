import { PipeTransform, Pipe, NgModule } from '@angular/core';
import { isNumber } from '../utils/utils';

@Pipe({
  name: 'isNumber',
})
export class IsNumberPipe implements PipeTransform {
  transform(value: any): boolean {
    return isNumber(value);
  }
}

@NgModule({
  declarations: [IsNumberPipe],
  exports: [IsNumberPipe],
})
export class NgIsNumberPipeModule {}
