# Boolean

* [`greater`](#greater)
* [`greaterOrEqual`](#greaterorequal)
* [`less`](#less)
* [`lessOrEqual`](#lessorequal)
* [`equal`](#equal)
* [`notEqual`](#notequal)
* [`identical`](#identical)
* [`notIdentical`](#notidentical)
* [`isNull`](#isnull)
* [`isUndefined`](#isundefined)
* [`isNil`](#isnil) 
* [`isNumber`](#isnumber)
* [`isString`](#isstring)
* [`isFunction`](#isfunction)
* [`isArray`](#isarray)
* [`isObject`](#isobject)
* [`isDefined`](#isdefined)

You can check the module import [`here`](./modules.md).

####greater

Returns true if the first value is greater than the second value.

##### File

```typescript
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

```typescript
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

```typescript
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

```typescript
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

```typescript
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

```typescript
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

```typescript
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

```typescript
import { IsNotIdenticalPipe } from 'angular-pipes/src/boolean/conditions.pipe';
```

##### Usage

```html
{{ 0 | notIdentical: 1 }} <!-- true -->
{{ 1 | notIdentical: '1' }} <!-- true -->
{{ 1 | notIdentical: 1 }} <!-- false -->
```


####isnull

Returns true if the value if null.

##### File

```typescript
import { IsNullPipe } from 'angular-pipes/src/boolean/types.pipe';
```

##### Usage

```html
{{ null | isNull }} <!-- true -->
{{ 1 | isNull }} <!-- false -->
```

####isundefined

Returns true if the value if undefined.

##### File

```typescript
import { IsUndefinedPipe } from 'angular-pipes/src/boolean/types.pipe';
```

##### Usage

```html
{{ a | isUndefined }} <!-- true if a does not exists -->
{{ 1 | isUndefined }} <!-- false -->
```

####isnil

Returns true if the value if null or undefined.

##### File

```typescript
import { IsNilPipe } from 'angular-pipes/src/boolean/types.pipe';
```

##### Usage

```html
{{ a | isNil }} <!-- true if a does not exists -->
{{ null | isNil }} <!-- true -->
{{ 1 | isNil }} <!-- false -->
```


####isnumber

Returns true if the value is a number.

##### File

```typescript
import { IsNumberPipe } from 'angular-pipes/src/boolean/types.pipe';
```

##### Usage

```html
{{ 'a' | isNumber }} <!-- false -->
{{ 1 | isNumber }} <!-- true -->
```

####isstring

Returns true if the value is a string.

##### File

```typescript
import { IsStringPipe } from 'angular-pipes/src/boolean/types.pipe';
```

##### Usage

```html
{{ 'a' | isString }} <!-- true -->
{{ 1 | isString }} <!-- false -->
```


####isfunction

Returns true if the value is a function.

##### File

```typescript
import { IsFunctionPipe } from 'angular-pipes/src/boolean/types.pipe';
```

##### Usage

```javascript
myFn() {
    // ...
}
```

```html
{{ 'a' | isFunction }} <!-- false -->
{{ myFn | isFunction }} <!-- true -->
```


####isarray

Returns true if the value is an array.

##### File

```typescript
import { IsArrayPipe } from 'angular-pipes/src/boolean/types.pipe';
```

##### Usage


```html
{{ 'a' | isArray }} <!-- false -->
{{ [] | isArray }} <!-- true -->
```


####isobject

Returns true if the value is an object.

##### File

```typescript
import { IsObjectPipe } from 'angular-pipes/src/boolean/types.pipe';
```

##### Usage


```html
{{ 'a' | isObject }} <!-- false -->
{{ {} | isObject }} <!-- true -->
```


####isdefined

Returns true if the value is defined (nor null nor undefined).

##### File

```typescript
import { IsDefinedPipe } from 'angular-pipes/src/boolean/types.pipe';
```

##### Usage


```html
{{ 'a' | isDefined }} <!-- true -->
{{ null | isDefined }} <!-- false -->
{{ a | isDefined }} <!-- false if a does not exists -->
```
