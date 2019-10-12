import { PipeTransform, Pipe, NgModule } from '@angular/core';

@Pipe({
  name: 'greaterOrEqual',
})
export class IsGreaterOrEqualPipe implements PipeTransform {
  transform(first: any, second: any): boolean {
    return first >= second;
  }
}

@NgModule({
  declarations: [IsGreaterOrEqualPipe],
  exports: [IsGreaterOrEqualPipe],
})
export class NgIsGreaterOrEqualPipeModule {}
