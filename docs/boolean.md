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

#### greater

Returns true if the first value is greater than the second value.

##### File

```typescript
import { IsGreaterPipe } from 'gix-angular-pipes';
```

##### Usage

```html
{{ 0 | greater: 1 }} <!-- false -->
{{ 1 | greater: 0 }} <!-- true -->
{{ 1 | greater: 1 }} <!-- false -->
```

#### greaterOrEqual

Returns true if the first value is greater or equal to the second value.

##### File

```typescript
import { IsGreaterOrEqualPipe } from 'gix-angular-pipes';
```

##### Usage

```html
{{ 0 | greaterOrEqual: 1 }} <!-- false -->
{{ 1 | greaterOrEqual: 0 }} <!-- true -->
{{ 1 | greaterOrEqual: 1 }} <!-- true -->
```

#### less

Returns true if the first value is less than the second value.

##### File

```typescript
import { IsLessPipe } from 'gix-angular-pipes';
```

##### Usage

```html
{{ 0 | less: 1 }} <!-- true -->
{{ 1 | less: 0 }} <!-- false -->
{{ 1 | less: 1 }} <!-- false -->
```

#### lessOrEqual

Returns true if the first value is less or equal to the second value.

##### File

```typescript
import { IsLessOrEqualPipe } from 'gix-angular-pipes';
```

##### Usage

```html
{{ 0 | lessOrEqual: 1 }} <!-- true -->
{{ 1 | lessOrEqual: 0 }} <!-- false -->
{{ 1 | lessOrEqual: 1 }} <!-- true -->
```

#### equal

Returns true if the value are equal (operator `==`).

##### File

```typescript
import { IsEqualPipe } from 'gix-angular-pipes';
```

##### Usage

```html
{{ 0 | equal: 1 }} <!-- false -->
{{ 1 | equal: '1' }} <!-- true -->
{{ 1 | equal: 1 }} <!-- true -->
```

#### notEqual

Returns true if the value are not equal (operator `!=`).

##### File

```typescript
import { IsNotEqualPipe } from 'gix-angular-pipes';
```

##### Usage

```html
{{ 0 | notEqual: 1 }} <!-- true -->
{{ 1 | notEqual: '1' }} <!-- false -->
{{ 1 | notEqual: 1 }} <!-- false -->
```


#### identical

Returns true if the value are identical (operator `===`).

##### File

```typescript
import { IsIdenticalPipe } from 'gix-angular-pipes';
```

##### Usage

```html
{{ 0 | identical: 1 }} <!-- false -->
{{ 1 | identical: '1' }} <!-- false -->
{{ 1 | identical: 1 }} <!-- true -->
```


#### notIdentical

Returns true if the value are not identical (operator `!==`).

##### File

```typescript
import { IsNotIdenticalPipe } from 'gix-angular-pipes';
```

##### Usage

```html
{{ 0 | notIdentical: 1 }} <!-- true -->
{{ 1 | notIdentical: '1' }} <!-- true -->
{{ 1 | notIdentical: 1 }} <!-- false -->
```


#### isNull

Returns true if the value if null.

##### File

```typescript
import { IsNullPipe } from 'gix-angular-pipes';
```

##### Usage

```html
{{ null | isNull }} <!-- true -->
{{ 1 | isNull }} <!-- false -->
```

#### isUndefined

Returns true if the value if undefined.

##### File

```typescript
import { IsUndefinedPipe } from 'gix-angular-pipes';
```

##### Usage

```html
{{ a | isUndefined }} <!-- true if a does not exists -->
{{ 1 | isUndefined }} <!-- false -->
```

#### isNil

Returns true if the value if null or undefined.

##### File

```typescript
import { IsNilPipe } from 'gix-angular-pipes';
```

##### Usage

```html
{{ a | isNil }} <!-- true if a does not exists -->
{{ null | isNil }} <!-- true -->
{{ 1 | isNil }} <!-- false -->
```


#### isNumber

Returns true if the value is a number.

##### File

```typescript
import { IsNumberPipe } from 'gix-angular-pipes';
```

##### Usage

```html
{{ 'a' | isNumber }} <!-- false -->
{{ 1 | isNumber }} <!-- true -->
```

#### isString

Returns true if the value is a string.

##### File

```typescript
import { IsStringPipe } from 'gix-angular-pipes';
```

##### Usage

```html
{{ 'a' | isString }} <!-- true -->
{{ 1 | isString }} <!-- false -->
```


#### isFunction

Returns true if the value is a function.

##### File

```typescript
import { IsFunctionPipe } from 'gix-angular-pipes';
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


#### isArray

Returns true if the value is an array.

##### File

```typescript
import { IsArrayPipe } from 'gix-angular-pipes';
```

##### Usage


```html
{{ 'a' | isArray }} <!-- false -->
{{ [] | isArray }} <!-- true -->
```


#### isObject

Returns true if the value is an object.

##### File

```typescript
import { IsObjectPipe } from 'gix-angular-pipes';
```

##### Usage


```html
{{ 'a' | isObject }} <!-- false -->
{{ {} | isObject }} <!-- true -->
```


#### isDefined

Returns true if the value is defined (nor null nor undefined).

##### File

```typescript
import { IsDefinedPipe } from 'gix-angular-pipes';
```

##### Usage


```html
{{ 'a' | isDefined }} <!-- true -->
{{ null | isDefined }} <!-- false -->
{{ a | isDefined }} <!-- false if a does not exists -->
```
