import { PipeTransform, Pipe, NgModule } from '@angular/core';

@Pipe({
  name: 'notEqual',
})
export class IsNotEqualPipe implements PipeTransform {
  transform(first: any, second: any): boolean {
    return first != second;
  }
}

@NgModule({
  declarations: [IsNotEqualPipe],
  exports: [IsNotEqualPipe],
})
export class NgIsNotEqualPipeModule {}
