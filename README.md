# ng2-pipes

ng2-pipes is a pipes library for `angular 2`. The project is hosted as `angular-pipes` on `npm`.

`WARNING`: Work in progress.


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


## How to use

For now, it only support TypeScript.

```typescript
import { NG2_PIPES } from 'angular-pipes';
```

You can also import only one category and a string pipe.

```typescript
import { NG2_BOOLEAN_PIPES, SplitPipe } from 'angular-pipes';
```

But this will import all the files, you can do better by importing
just the boolean files.

```typescript
import { NG2_BOOLEAN_PIPES } from 'angular-pipes/build/boolean';
import { SplitPipe } from 'ng2-pipes/build/string';
```

Same thing for the other categories.

And if you want to only include one file:

```typescript
import { HeadPipe } from 'ng2-pipes/build/array/head.pipe';
```

The boolean pipes are only in two files, the types are in `types.pipe.ts` and the
conditions are in `conditions.pipe.ts`

## Documentation - `TODO`

## Tests

```
npm install
npm run lite
```

And navigate to `/unit-tests.html`.
It may take some time for the files to transpile.

## Contribute

Feel free to contribute in any way.
