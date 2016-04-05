[![NPM Version](https://img.shields.io/npm/v/angular-pipes.svg)](https://npmjs.org/package/angular-pipes)

# angular-pipes

angular-pipes is a pipes library for `angular 2`. The project is hosted as `angular-pipes` on `npm`.

`WARNING`: Work in progress. Not many options are available for now. 

## Contribute

Feel free to contribute in any way. Post your own pipes, fix bugs, add options to existing pipes, etc.

## Pipes

### Collections (array)

* [`empty`](#empty)
* [`head`](#head)
* [`initial`](#initial)
* [`join`](#join)
* [`last`](#last)
* [`tail`](#tail)
* [`uniq`](#uniq)
* [`without`](#without)
* [`range`](#range) 
* [`map`](#map) 
* [`pluck`](#pluck)
* [`where`](#where)


### Boolean

* [`greater`](#greater)
* [`greaterOrEqual`](#greaterOrEqual)
* [`less`](#less)
* [`lessOrEqual`](#lessOrEqual)
* [`equal`](#equal)
* [`notEqual`](#notEqual)
* [`identical`](#identical)
* [`notIdentical`](#notIdentical)
* [`null`](#null)
* [`undefined`](#undefined)
* [`nil`](#nil) 
* [`number`](#number)
* [`string`](#string)
* [`function`](#function)
* [`array`](#array)
* [`object`](#object)
* [`defined`](#defined)

### Math

* [`bytes`](#bytes)
* [`ceil`](#ceil)
* [`floor`](#floor)
* [`round`](#round)
* [`min`](#min)
* [`max`](#max)
* [`mean`](#mean)
* [`sum`](#sum)

### String

* [`leftpad`](#leftpad)
* [`rightpad`](#rightpad)
* [`pad`](#pad)
* [`trim`](#trim)
* [`split`](#split)
* [`replace`](#replace)
* [`match`](#match)
* [`test`](#test)


## Install

### npm

```
npm install angular-pipes --save
```

### jspm

```
jspm install angular-pipes=npm:angular-pipes
```

## How to use

```typescript
import { NG2_PIPES } from 'angular-pipes';

@Component({
    // ...
    pipes: [NG2_PIPES]
    // ...
}}

```

You can also import only one category and a string pipe.

```typescript
import { NG2_BOOLEAN_PIPES, SplitPipe } from 'angular-pipes';

@Component({
    // ...
    pipes: [NG2_BOOLEAN_PIPES, SplitPipe]
    // ...
}}
```

But this will import all the files, you can do better by importing
just the boolean files.

```typescript
import { NG2_BOOLEAN_PIPES } from 'angular-pipes/pipes/boolean';
import { SplitPipe } from 'angular-pipes/pipes/string';
```

Same thing for the other categories.

And if you want to only include one file:

```typescript
import { HeadPipe } from 'angular-pipes/pipes/src/array/head.pipe';
```

The boolean pipes are only in two files, the types are in `types.pipe.ts` and the
conditions are in `conditions.pipe.ts`

If you only use one or two pipes, it's better to include only those two files. It will be lighter.
There is no bundle available, this project let you bundle as you wish.

## Documentation

###Collections

####empty

Returns true if the collection is empty.

##### File

```
import { EmptyPipe } from 'angular-pipes/pipes/src/array/empty.pipe';
```

##### Usage

```html
{{ [] | empty }} <!-- true -->
{{ [1, 2, 3] | empty }} <!-- false -->
```

####head

Returns the first element of the collection, or undefined if the collection is empty.

##### File

```
import { HeadPipe } from 'angular-pipes/pipes/src/array/head.pipe';
```

##### Usage

```html
{{ [] | head }} <!-- undefined -->
{{ [1, 2, 3] | head }} <!-- 1 -->
```

####initial

Returns every element but the last of the collection or empty array if the collection is empty.

##### File

```
import { InitialPipe } from 'angular-pipes/pipes/src/array/initial.pipe';
```

##### Usage

```html
{{ [] | initial }} <!-- [] -->
{{ [1, 2, 3] | initial }} <!-- [1, 2] -->
```


####join

Joins an array into a string.

##### File

```
import { JoinPipe } from 'angular-pipes/pipes/src/array/join.pipe';
```

##### Usage

```html
{{ [] | join }} <!-- '' -->
{{ ['a', 'b', 'c'] | join }} <!-- 'abc' -->
{{ ['a', 'b', 'c'] | join: '0' }} <!-- 'a0b0c' -->
```


####last

Returns the last element of the collection or undefined if the collection is empty.

##### File

```
import { LastPipe } from 'angular-pipes/pipes/src/array/last.pipe';
```

##### Usage

```html
{{ [] | last }} <!-- undefined -->
{{ ['a', 'b', 'c'] | last }} <!-- 'c' -->
```


####tail

Returns every elements but the first of the collection or empty array if the collection is empty.

##### File

```
import { TailPipe } from 'angular-pipes/pipes/src/array/tail.pipe';
```

##### Usage

```html
{{ [] | tail }} <!-- [] -->
{{ ['a', 'b', 'c'] | last }} <!-- ['b', 'c'] -->
```


####uniq

Returns the collection keeping only one duplicate.

##### File

```
import { UniqPipe } from 'angular-pipes/pipes/src/array/uniq.pipe';
```

##### Usage

```html
{{ [] | uniq }} <!-- [] -->
{{ ['a', 'b', 'a'] | last }} <!-- ['a', 'b'] -->
```

##### Todo

* Need deep equal


####without

Returns the collection without the specified elements.

##### File

```
import { WithoutPipe } from 'angular-pipes/pipes/src/array/without.pipe';
```

##### Usage

```html
{{ [1, 2, 3] | without: [1, 3] }} <!-- [2] -->
```

##### Todo

* Need deep equal


####range

Returns a range of number with a given size (`default: 0`) and start (`default: 1`).

The value on the left hand size does not matter, it is ignored.

##### File

```
import { RangePipe } from 'angular-pipes/pipes/src/array/range.pipe';
```

##### Usage

```html
<!-- {{ [] | range: size : start }} -->
{{ [] | range: 3: 1 }} <!-- [1, 2, 3] -->
{{ [] | range: 5: 0 }} <!-- [0, 1, 2, 3, 4] -->
{{ [] | range: 5: -2 }} <!-- [-2, -1, 0, 1, 2] -->
```


####map

Returns the collection that is passed through a map function.
If no function is provided, the collection is returned unchanged.

##### File

```
import { MapPipe } from 'angular-pipes/pipes/src/array/map.pipe';
```

##### Usage

```javascript
// ...
addOne (item) {
    
    return item + 1;   
}
// ...
```

```html
{{ [1, 2, 3] | map: addOne }} <!-- [2, 3, 4] -->
```


####pluck

Returns an array of the given property of the object in the array. 


##### File

```
import { PluckPipe } from 'angular-pipes/pipes/src/array/pluck.pipe';
```

##### Usage

```javascript
// ...

const values = [{
    a: 1,
    c: {
        d: 3,
        e: {
            f: 4   
        }
    }   
}, {
    a: 2,
    c: {
        d: 4,
        e: {
            f: 5   
        }   
    }
}];

// ...
``` 

```html
{{ values | pluck: 'a' }} <!-- [1, 2] -->
{{ values | pluck: 'c.d' }} <!-- [3, 4] -->
{{ values | pluck: 'c.e.f' }} <!-- [4, 5] -->
{{ values | pluck: 'c.e.f.g' }} <!-- [undefined, undefined] -->
```


####where

Filter an array with a given function or a property shorthand.

##### File

```
import { WherePipe } from 'angular-pipes/pipes/src/array/where.pipe';
```

##### Usage

```javascript
// ...

const values = [{
    a: 1,
    c: {
        d: 3,
        e: {
            f: 4   
        }
    }   
}, {
    a: 2,
    c: {
        d: 4,
        e: {
            f: 5   
        }   
    }
}];

const numbers = [1, 2, 3, 4, 1, 4];

// ...

aEqualsOne(item) {
    return item.a === 1;   
}

``` 

```html
{{ values | where: aEqualsOne }} <!-- [{ a: 1, c: { d: 3, e: { f: 4 } }] -->
{{ values | where: ['a', 1] }}   <!-- [{ a: 1, c: { d: 3, e: { f: 4 } }] -->
{{ values | where: ['c.e.f', 4] }}   <!-- [{ a: 1, c: { d: 3, e: { f: 4 } }] -->
{{ numbers | where: 1 }}   <!-- [1, 1] -->
```


### Boolean 

####greater

Returns true if the first value is greater than the second value.

##### File

```
import { IsGreaterPipe } from 'angular-pipes/pipes/src/boolean/conditions.pipe';
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
import { IsGreaterOrEqualPipe } from 'angular-pipes/pipes/src/boolean/conditions.pipe';
```

##### Usage

```html
{{ 0 | greater: 1 }} <!-- false -->
{{ 1 | greater: 0 }} <!-- true -->
{{ 1 | greater: 1 }} <!-- true -->
```

####less

Returns true if the first value is less than the second value.

##### File

```
import { IsLessPipe } from 'angular-pipes/pipes/src/boolean/conditions.pipe';
```

##### Usage

```html
{{ 0 | greater: 1 }} <!-- true -->
{{ 1 | greater: 0 }} <!-- false -->
{{ 1 | greater: 1 }} <!-- false -->
```

####lessOrEqual

Returns true if the first value is less or equal to the second value.

##### File

```
import { IsLessOrEqualPipe } from 'angular-pipes/pipes/src/boolean/conditions.pipe';
```

##### Usage

```html
{{ 0 | greater: 1 }} <!-- true -->
{{ 1 | greater: 0 }} <!-- false -->
{{ 1 | greater: 1 }} <!-- true -->
```

####equal

Returns true if the value are equal (operator `==`).

##### File

```
import { IsEqualPipe } from 'angular-pipes/pipes/src/boolean/conditions.pipe';
```

##### Usage

```html
{{ 0 | greater: 1 }} <!-- false -->
{{ 1 | greater: '1' }} <!-- true -->
{{ 1 | greater: 1 }} <!-- true -->
```

####notEqual

Returns true if the value are not equal (operator `!=`).

##### File

```
import { IsNotEqualPipe } from 'angular-pipes/pipes/src/boolean/conditions.pipe';
```

##### Usage

```html
{{ 0 | greater: 1 }} <!-- true -->
{{ 1 | greater: '1' }} <!-- false -->
{{ 1 | greater: 1 }} <!-- false -->
```


####identical

Returns true if the value are identical (operator `===`).

##### File

```
import { IsIdenticalPipe } from 'angular-pipes/pipes/src/boolean/conditions.pipe';
```

##### Usage

```html
{{ 0 | greater: 1 }} <!-- false -->
{{ 1 | greater: '1' }} <!-- false -->
{{ 1 | greater: 1 }} <!-- true -->
```


####notEqual

Returns true if the value are not identical (operator `!==`).

##### File

```
import { IsNotIdenticalPipe } from 'angular-pipes/pipes/src/boolean/conditions.pipe';
```

##### Usage

```html
{{ 0 | greater: 1 }} <!-- true -->
{{ 1 | greater: '1' }} <!-- true -->
{{ 1 | greater: 1 }} <!-- false -->
```


####null

Returns true if the value if null.

##### File

```
import { IsNullPipe } from 'angular-pipes/pipes/src/boolean/types.pipe';
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
import { IsUndefinedPipe } from 'angular-pipes/pipes/src/boolean/types.pipe';
```

##### Usage

```html
{{ a | null }} <!-- true if a does not exists -->
{{ 1 | null }} <!-- false -->
```

##### Notes

I actually need to make sure that `undefined` is not parsed as the JS variable instead of the pipe.
I'll update this soon.


####nil

Returns true if the value if null or undefined.

##### File

```
import { IsNilPipe } from 'angular-pipes/pipes/src/boolean/types.pipe';
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
import { IsNumberPipe } from 'angular-pipes/pipes/src/boolean/types.pipe';
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
import { IsStringPipe } from 'angular-pipes/pipes/src/boolean/types.pipe';
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
import { IsFunctionPipe } from 'angular-pipes/pipes/src/boolean/types.pipe';
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
import { IsArrayPipe } from 'angular-pipes/pipes/src/boolean/types.pipe';
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
import { IsObjectPipe } from 'angular-pipes/pipes/src/boolean/types.pipe';
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
import { IsDefinedPipe } from 'angular-pipes/pipes/src/boolean/types.pipe';
```

##### Usage


```html
{{ 'a' | defined }} <!-- true -->
{{ null | defined }} <!-- false -->
{{ a | defined }} <!-- false if a does not exists -->
```

### Math (todo)

### String (todo)

## Tests

```
npm install
npm run lite
```

And navigate to `/unit-tests.html`.
It may take some time for the files to transpile.

`TODO`: Karma


## Contributors

* Florian Knop
