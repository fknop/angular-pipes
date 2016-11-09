[![NPM Version](https://img.shields.io/npm/v/angular-pipes.svg)](https://npmjs.org/package/angular-pipes)
[![Build Status](https://travis-ci.org/fknop/angular-pipes.svg?branch=master)](https://travis-ci.org/fknop/angular-pipes)

# angular-pipes

angular-pipes is a pipes library for `angular 2`. The project is hosted as `angular-pipes` on `npm`.

## 5.0.x Release

* The 5.0.x release brings some breaking changes, make sure to read the changelog before updating.

## Contribute

Read the [contributing guidelines](./CONTRIBUTING.md)

## Pipes

You can find the documentations in the [`docs`](./docs) folder.

### Collections (array)

* [`empty`](./docs/array.md#empty)
* [`head`](./docs/array.md#head)
* [`initial`](./docs/array.md#initial)
* [`join`](./docs/array.md#join)
* [`last`](./docs/array.md#last)
* [`tail`](./docs/array.md#tail)
* [`uniq`](./docs/array.md#uniq)
* [`without`](./docs/array.md#without)
* [`range`](./docs/array.md#range)
* [`map`](./docs/array.md#map)
* [`pluck`](./docs/array.md#pluck)
* [`where`](./docs/array.md#where)
* [`orderBy`](./docs/array.md#orderby)
* [`reverse`](./docs/array.md#reverse)
* [`count`](./docs/array.md#count)
* [`some`](./docs/array.md#some)
* [`every`](./docs/array.md#every)
* [`shuffle`](./docs/array.md#shuffle)
* [`take`](./docs/array.md#take)
* [`drop`](./docs/array.md#drop)
* [`deep`](./docs/array.md#deep)
* [`chunk`](./docs/array.md#chunk)


### Boolean

* [`greater`](./docs/boolean.md#greater)
* [`greaterOrEqual`](./docs/boolean.md#greaterorequal)
* [`less`](./docs/boolean.md#less)
* [`lessOrEqual`](./docs/boolean.md#lessorequal)
* [`equal`](./docs/boolean.md#equal)
* [`notEqual`](./docs/boolean.md#notequal)
* [`identical`](./docs/boolean.md#identical)
* [`notIdentical`](./docs/boolean.md#notidentical)
* [`null`](./docs/boolean.md#null)
* [`undefined`](./docs/boolean.md#undefined)
* [`nil`](./docs/boolean.md#nil)
* [`number`](./docs/boolean.md#number)
* [`string`](./docs/boolean.md#string)
* [`function`](./docs/boolean.md#function)
* [`array`](./docs/boolean.md#array)
* [`object`](./docs/boolean.md#object)
* [`defined`](./docs/boolean.md#defined)

### Math

* [`bytes`](./docs/math.md#bytes)
* [`ceil`](./docs/math.md#ceil)
* [`floor`](./docs/math.md#floor)
* [`round`](./docs/math.md#round)
* [`degrees`](./docs/math.md#degrees)
* [`radians`](./docs/math.md#radians)
* [`random`](./docs/math.md#random)
* [`pow`](./docs/math.md#pow)
* [`sqrt`](./docs/math.md#sqrt)

### Aggregate

* [`min`](./docs/aggregate.md#min)
* [`max`](./docs/aggregate.md#max)
* [`mean`](./docs/aggregate.md#mean)
* [`sum`](./docs/aggregate.md#sum)

### String

* [`leftpad`](./docs/string.md#leftpad)
* [`rightpad`](./docs/string.md#rightpad)
* [`pad`](./docs/string.md#pad)
* [`trim`](./docs/string.md#trim)
* [`split`](./docs/string.md#split)
* [`replace`](./docs/string.md#replace)
* [`match`](./docs/string.md#match)
* [`test`](./docs/string.md#test)
* [`newlines`](./docs/string.md#newlines)
* [`capitalize`](./docs/string.md#capitalize)
* [`upperfirst`](./docs/string.md#upperfirst)
* [`template`](./docs/string.md#template)
* [`encodeURI`](./docs/string.md#encodeuri)
* [`encodeURIComponent`](./docs/string.md#encodeuricomponent)
* [`repeat`](./docs/string.md#repeat)
* [`truncate`](./docs/string.md#truncate)


### Object

* [`keys`](./docs/object.md#keys)
* [`toArray`](./docs/object.md#toarray)


## Install

### npm

```
npm install angular-pipes --save
```

## How to use

Check the [`documentation`](./docs) for how to import your pipes in your `NgModule` and how to use individual pipes.

## Tests

```
npm install
npm test
```

## License

[`MIT`](./LICENSE.md)
