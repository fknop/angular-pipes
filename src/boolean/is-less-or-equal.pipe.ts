import { PipeTransform, Pipe, NgModule } from '@angular/core';

@Pipe({
  name: 'lessOrEqual',
})
export class IsLessOrEqualPipe implements PipeTransform {
  transform(first: any, second: any): boolean {
    return first <= second;
  }
}

@NgModule({
  declarations: [IsLessOrEqualPipe],
  exports: [IsLessOrEqualPipe],
})
export class NgIsLessOrEqualPipeModule {}
