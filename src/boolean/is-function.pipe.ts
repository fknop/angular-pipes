import { PipeTransform, Pipe, NgModule } from '@angular/core';
import { isFunction } from '../utils/utils';

@Pipe({
  name: 'isFunction',
})
export class IsFunctionPipe implements PipeTransform {
  transform(value: any): boolean {
    return isFunction(value);
  }
}

@NgModule({
  declarations: [IsFunctionPipe],
  exports: [IsFunctionPipe],
})
export class NgIsFunctionPipeModule {}
