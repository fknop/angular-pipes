import { PipeTransform, Pipe, NgModule } from '@angular/core';
import { isArray } from '../utils/utils';

@Pipe({
  name: 'isArray',
})
export class IsArrayPipe implements PipeTransform {
  transform(value: any): boolean {
    return isArray(value);
  }
}

@NgModule({
  declarations: [IsArrayPipe],
  exports: [IsArrayPipe],
})
export class NgIsArrayPipeModule {}
