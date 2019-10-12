import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { empty } from '../utils/utils';

@Pipe({
  name: 'empty',
})
export class EmptyPipe implements PipeTransform {
  transform(input: any): any {
    return empty(input);
  }
}

@NgModule({
  declarations: [EmptyPipe],
  exports: [EmptyPipe],
})
export class NgEmptyPipeModule {}
