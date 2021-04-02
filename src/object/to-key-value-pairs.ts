import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { isObject } from '../utils/utils';

/**
 * @description Transforms an object to an array of key/value pairs,
 * returns the input unchanged when not of type object.
 */
@Pipe({ name: 'toKeyValuePairs' })
export class ToKeyValuePairsPipe implements PipeTransform {
  transform(input: any): any {

    // Any input not of type object is returned un-mutated.
    if (!isObject(input)) {
      return input;
    }

    // Get the array of key/values of the object and transform into an array of KVPs
    return Object.entries(input).map(element => ({ key: element[0], value: element[1] }));
  }

}

@NgModule({
  declarations: [ToKeyValuePairsPipe],
  exports: [ToKeyValuePairsPipe],
})
export class NgToKeyValuePairsPipeModule {
}
