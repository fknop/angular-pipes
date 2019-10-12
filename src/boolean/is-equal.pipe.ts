import { PipeTransform, Pipe, NgModule } from '@angular/core';

@Pipe({
  name: 'equal',
})
export class IsEqualPipe implements PipeTransform {
  transform(first: any, second: any): boolean {
    return first == second;
  }
}

@NgModule({
  declarations: [IsEqualPipe],
  exports: [IsEqualPipe],
})
export class NgIsEqualPipeModule {}
