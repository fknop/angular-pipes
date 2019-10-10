import { PipeTransform, Pipe, NgModule } from '@angular/core';

@Pipe({
  name: 'greater',
})
export class IsGreaterPipe implements PipeTransform {
  transform(first: any, second: any): boolean {
    return first > second;
  }
}

@NgModule({
  declarations: [IsGreaterPipe],
  exports: [IsGreaterPipe],
})
export class NgIsGreaterPipeModule {}
