[![NPM Version](https://img.shields.io/npm/v/angular-pipes.svg)](https://npmjs.org/package/angular-pipes)

# angular-pipes

angular-pipes is a pipes library for `angular 2`. The project is hosted as `angular-pipes` on `npm`.

`WARNING`: Work in progress.

## Contribute

Feel free to contribute in any way. 

## Pipes

### Collections (array)

* `empty`
* `head`
* `initial`
* `join`
* `last`
* `tail`
* `uniq`
* `without`

### Boolean

* `greater`
* `greaterOrEqual`
* `less`
* `lessOrEqual`
* `equal`
* `notEqual`
* `identical`
* `notIdentical`
* `null`
* `undefined`
* `number`
* `string`
* `function`
* `array`
* `object`
* `defined`

### Math

* `bytes`
* `ceil`
* `floor`
* `round`
* `min`
* `max`
* `mean`
* `sum`

### String

* `leftpad`
* `rightpad`
* `pad`
* `trim`
* `split`
* `replace (not tested)`
* `match (not tested)`
* `test (not tested)`


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
