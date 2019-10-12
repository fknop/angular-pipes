import { PipeTransform, Pipe, NgModule } from '@angular/core';
import { isObject } from '../utils/utils';

@Pipe({
  name: 'isObject',
})
export class IsObjectPipe implements PipeTransform {
  transform(value: any): boolean {
    return isObject(value);
  }
}

@NgModule({
  declarations: [IsObjectPipe],
  exports: [IsObjectPipe],
})
export class NgIsObjectPipeModule {}
