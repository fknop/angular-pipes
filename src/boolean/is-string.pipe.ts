import { PipeTransform, Pipe, NgModule } from '@angular/core';
import { isString } from '../utils/utils';

@Pipe({
  name: 'isString',
})
export class IsStringPipe implements PipeTransform {
  transform(value: any): boolean {
    return isString(value);
  }
}

@NgModule({
  declarations: [IsStringPipe],
  exports: [IsStringPipe],
})
export class NgIsStringPipeModule {}
