import { PipeTransform, Pipe, NgModule } from '@angular/core';

@Pipe({
  name: 'less',
})
export class IsLessPipe implements PipeTransform {
  transform(first: any, second: any): boolean {
    return first < second;
  }
}

@NgModule({
  declarations: [IsLessPipe],
  exports: [IsLessPipe],
})
export class NgIsLessPipeModule {}
