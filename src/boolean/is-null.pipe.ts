import { PipeTransform, Pipe, NgModule } from '@angular/core';
import { isNull } from '../utils/utils';

@Pipe({
  name: 'isNull',
})
export class IsNullPipe implements PipeTransform {
  transform(value: any): boolean {
    return isNull(value);
  }
}

@NgModule({
  declarations: [IsNullPipe],
  exports: [IsNullPipe],
})
export class NgIsNullPipeModule {}
