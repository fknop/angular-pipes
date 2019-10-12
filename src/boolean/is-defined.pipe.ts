import { PipeTransform, Pipe, NgModule } from '@angular/core';
import { isUndefined } from '../utils/utils';

@Pipe({
  name: 'isDefined',
})
export class IsDefinedPipe implements PipeTransform {
  transform(value: any): boolean {
    return !isUndefined(value);
  }
}

@NgModule({
  declarations: [IsDefinedPipe],
  exports: [IsDefinedPipe],
})
export class NgIsDefinedPipeModule {}
