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
* [`pluck`](#pluck) (not tested - not published yet)
* [`where`](#where) (not tested - not published yet)


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
* [`nil`](#nil) (not tested - not published yet)
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
* [`replace (not tested)`](#replace)
* [`match (not tested)`](#match)
* [`test (not tested)`](#test)


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

## Documentation - `TODO`

###Collections

####empty

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
