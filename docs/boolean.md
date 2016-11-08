# Boolean

* [`greater`](#greater)
* [`greaterOrEqual`](#greaterorequal)
* [`less`](#less)
* [`lessOrEqual`](#lessorequal)
* [`equal`](#equal)
* [`notEqual`](#notequal)
* [`identical`](#identical)
* [`notIdentical`](#notidentical)
* [`null`](#null)
* [`undefined`](#undefined)
* [`nil`](#nil) 
* [`number`](#number)
* [`string`](#string)
* [`function`](#function)
* [`array`](#array)
* [`object`](#object)
* [`defined`](#defined)

You can check the module import [`here`](./modules.md).

####greater

Returns true if the first value is greater than the second value.

##### File

```
import { IsGreaterPipe } from 'angular-pipes/src/boolean/conditions.pipe';
```

##### Usage

```html
{{ 0 | greater: 1 }} <!-- false -->
{{ 1 | greater: 0 }} <!-- true -->
{{ 1 | greater: 1 }} <!-- false -->
```

####greaterOrEqual

Returns true if the first value is greater or equal to the second value.

##### File

```
import { IsGreaterOrEqualPipe } from 'angular-pipes/src/boolean/conditions.pipe';
```

##### Usage

```html
{{ 0 | greaterOrEqual: 1 }} <!-- false -->
{{ 1 | greaterOrEqual: 0 }} <!-- true -->
{{ 1 | greaterOrEqual: 1 }} <!-- true -->
```

####less

Returns true if the first value is less than the second value.

##### File

```
import { IsLessPipe } from 'angular-pipes/src/boolean/conditions.pipe';
```

##### Usage

```html
{{ 0 | less: 1 }} <!-- true -->
{{ 1 | less: 0 }} <!-- false -->
{{ 1 | less: 1 }} <!-- false -->
```

####lessOrEqual

Returns true if the first value is less or equal to the second value.

##### File

```
import { IsLessOrEqualPipe } from 'angular-pipes/src/boolean/conditions.pipe';
```

##### Usage

```html
{{ 0 | lessOrEqual: 1 }} <!-- true -->
{{ 1 | lessOrEqual: 0 }} <!-- false -->
{{ 1 | lessOrEqual: 1 }} <!-- true -->
```

####equal

Returns true if the value are equal (operator `==`).

##### File

```
import { IsEqualPipe } from 'angular-pipes/src/boolean/conditions.pipe';
```

##### Usage

```html
{{ 0 | equal: 1 }} <!-- false -->
{{ 1 | equal: '1' }} <!-- true -->
{{ 1 | equal: 1 }} <!-- true -->
```

####notEqual

Returns true if the value are not equal (operator `!=`).

##### File

```
import { IsNotEqualPipe } from 'angular-pipes/src/boolean/conditions.pipe';
```

##### Usage

```html
{{ 0 | notEqual: 1 }} <!-- true -->
{{ 1 | notEqual: '1' }} <!-- false -->
{{ 1 | notEqual: 1 }} <!-- false -->
```


####identical

Returns true if the value are identical (operator `===`).

##### File

```
import { IsIdenticalPipe } from 'angular-pipes/src/boolean/conditions.pipe';
```

##### Usage

```html
{{ 0 | identical: 1 }} <!-- false -->
{{ 1 | identical: '1' }} <!-- false -->
{{ 1 | identical: 1 }} <!-- true -->
```


####notIdentical

Returns true if the value are not identical (operator `!==`).

##### File

```
import { IsNotIdenticalPipe } from 'angular-pipes/src/boolean/conditions.pipe';
```

##### Usage

```html
{{ 0 | notIdentical: 1 }} <!-- true -->
{{ 1 | notIdentical: '1' }} <!-- true -->
{{ 1 | notIdentical: 1 }} <!-- false -->
```


####null

Returns true if the value if null.

##### File

```
import { IsNullPipe } from 'angular-pipes/src/boolean/types.pipe';
```

##### Usage

```html
{{ null | null }} <!-- true -->
{{ 1 | null }} <!-- false -->
```

##### Notes

I actually need to make sure that `null` is not parsed as the JS keyword instead of the pipe.
I'll update this soon.


####undefined

Returns true if the value if undefined.

##### File

```
import { IsUndefinedPipe } from 'angular-pipes/src/boolean/types.pipe';
```

##### Usage

```html
{{ a | undefined }} <!-- true if a does not exists -->
{{ 1 | undefined }} <!-- false -->
```

##### Notes

I actually need to make sure that `undefined` is not parsed as the JS variable instead of the pipe.
I'll update this soon.


####nil

Returns true if the value if null or undefined.

##### File

```
import { IsNilPipe } from 'angular-pipes/src/boolean/types.pipe';
```

##### Usage

```html
{{ a | nil }} <!-- true if a does not exists -->
{{ null | nil }} <!-- true -->
{{ 1 | nil }} <!-- false -->
```


####number

Returns true if the value is a number.

##### File

```
import { IsNumberPipe } from 'angular-pipes/src/boolean/types.pipe';
```

##### Usage

```html
{{ 'a' | number }} <!-- false -->
{{ 1 | number }} <!-- true -->
```

####string

Returns true if the value is a string.

##### File

```
import { IsStringPipe } from 'angular-pipes/src/boolean/types.pipe';
```

##### Usage

```html
{{ 'a' | string }} <!-- true -->
{{ 1 | string }} <!-- false -->
```


####function

Returns true if the value is a function.

##### File

```
import { IsFunctionPipe } from 'angular-pipes/src/boolean/types.pipe';
```

##### Usage

```javascript
myFn() {
    // ...
}
```

```html
{{ 'a' | function }} <!-- false -->
{{ myFn | function }} <!-- true -->
```


####array

Returns true if the value is an array.

##### File

```
import { IsArrayPipe } from 'angular-pipes/src/boolean/types.pipe';
```

##### Usage


```html
{{ 'a' | array }} <!-- false -->
{{ [] | array }} <!-- true -->
```


####object

Returns true if the value is an object.

##### File

```
import { IsObjectPipe } from 'angular-pipes/src/boolean/types.pipe';
```

##### Usage


```html
{{ 'a' | object }} <!-- false -->
{{ {} | object }} <!-- true -->
```


####defined

Returns true if the value is defined (nor null nor undefined).

##### File

```
import { IsDefinedPipe } from 'angular-pipes/src/boolean/types.pipe';
```

##### Usage


```html
{{ 'a' | defined }} <!-- true -->
{{ null | defined }} <!-- false -->
{{ a | defined }} <!-- false if a does not exists -->
```
