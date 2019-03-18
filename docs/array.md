# Collections (array)

* [`empty`](#empty)
* [`head`](#head)
* [`initial`](#initial)
* [`join`](#join)
* [`last`](#last)
* [`tail`](#tail)
* [`uniq`](#uniq)
* [`without`](#without)
* [`intersection`](#intersection)
* [`union`](#union)
* [`range`](#range)
* [`map`](#map)
* [`pluck`](#pluck)
* [`where`](#where)
* [`firstOrDefault`](#firstordefault)
* [`orderBy`](#orderby)
* [`reverse`](#reverse)
* [`count`](#count)
* [`some`](#some)
* [`every`](#every)
* [`shuffle`](#shuffle)
* [`take`](#take)
* [`takeUntil`](#takeuntil)
* [`takeWhile`](#takewhile)
* [`drop`](#drop)
* [`deep`](#deep)
* [`chunk`](#chunk)
* [`flatten`](#flatten)

You can check the module import [`here`](./modules.md).

#### empty

Returns true if the collection is empty.

##### File

```typescript
import { EmptyPipe } from 'gix-angular-pipes';
```

##### Usage

```html
{{ [] | empty }} <!-- true -->
{{ [1, 2, 3] | empty }} <!-- false -->
```

#### head

Returns the first element of the collection, or undefined if the collection is empty.

##### File

```typescript
import { HeadPipe } from 'gix-angular-pipes';
```

##### Usage

```html
{{ [] | head }} <!-- undefined -->
{{ [1, 2, 3] | head }} <!-- 1 -->
```

#### initial

Returns every element but the last of the collection or empty array if the collection is empty.

##### File

```typescript
import { InitialPipe } from 'gix-angular-pipes';
```

##### Usage

```html
{{ [] | initial }} <!-- [] -->
{{ [1, 2, 3] | initial }} <!-- [1, 2] -->
```


#### join

Joins an array into a string.

##### File

```typescript
import { JoinPipe } from 'gix-angular-pipes';
```

##### Usage

```html
{{ [] | join }} <!-- '' -->
{{ ['a', 'b', 'c'] | join }} <!-- 'abc' -->
{{ ['a', 'b', 'c'] | join: '0' }} <!-- 'a0b0c' -->
```


#### last

Returns the last element of the collection or undefined if the collection is empty.

##### File

```typescript
import { LastPipe } from 'gix-angular-pipes';
```

##### Usage

```html
{{ [] | last }} <!-- undefined -->
{{ ['a', 'b', 'c'] | last }} <!-- 'c' -->
```


#### tail

Returns every elements but the first of the collection or empty array if the collection is empty.

##### File

```typescript
import { TailPipe } from 'gix-angular-pipes';
```

##### Usage

```html
{{ [] | tail }} <!-- [] -->
{{ ['a', 'b', 'c'] | tail }} <!-- ['b', 'c'] -->
```


#### uniq

Returns the collection keeping only one duplicate.

##### File

```typescript
import { UniqPipe } from 'gix-angular-pipes';
```

##### Usage

```html
{{ [] | uniq }} <!-- [] -->
{{ ['a', 'b', 'a'] | uniq }} <!-- ['a', 'b'] -->
```

#### without

Returns the collection without the specified elements.

##### File

```typescript
import { WithoutPipe } from 'gix-angular-pipes';
```

##### Usage

```html
{{ [1, 2, 3] | without: [1, 3] }} <!-- [2] -->
```

#### intersection

Returns the intersection of two collection, works with deep equal.

##### File

```typescript
import { IntersectionPipe } from 'gix-angular-pipes';
```

##### Usage

```html
{{ [1, 2, 3] | intersection: [1, 2] }} <!-- [1, 2] -->
{{ [1, 2, 3] | intersection: [1, 2, 2] }} <!-- [1, 2] it does not take duplicates -->
{{ [1, 2] | intersection: [3, 4] }} <!-- [] -->
{{ [{ a: 1 }, { a: 2 }] | intersection: [{ a: 1 }, { a: 3 }] }} <!-- [] (no deep here)-->
{{ [{ a: 1 }, { a: 2 }] | deep | intersection: [{ a: 1 }, { a: 3 }] }} <!-- [{a: 1}] -->
```

#### union

Returns the union of two collection, works with deep equal.

##### File

```typescript
import { UnionPipe } from 'gix-angular-pipes';
```

##### Usage

```html
{{ [1, 2, 3] | union: [1, 2] }} <!-- [1, 2, 3] -->
{{ [1, 2] | union: [3, 4] }} <!-- [1, 2, 3, 4] -->
{{ [{ a: 1 }, { a: 2 }] | union: [{ a: 1 }, { a: 3 }] }} <!-- [{ a: 1 }, { a: 2 }, { a: 1 }, { a: 3 }] (no deep here)-->
{{ [{ a: 1 }, { a: 2 }] | deep | union: [{ a: 1 }, { a: 3 }] }} <!-- [{ a: 1 }, { a: 2 }, { a: 3 }] -->
```

#### range

Returns a range of number with a given size (`default: 0`) and start (`default: 1`).

The value on the left hand size does not matter, it is ignored.

##### File

```typescript
import { RangePipe } from 'gix-angular-pipes';
```

##### Usage

```html
<!-- {{ [] | range: size : start }} -->
{{ [] | range: 3: 1 }} <!-- [1, 2, 3] -->
{{ [] | range: 5: 0 }} <!-- [0, 1, 2, 3, 4] -->
{{ [] | range: 5: -2 }} <!-- [-2, -1, 0, 1, 2] -->
```


#### map

Returns the collection that is passed through a map function.
If no function is provided, the collection is returned unchanged.

##### File

```typescript
import { MapPipe } from 'gix-angular-pipes';
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


#### pluck

Returns an array of the given property of the object in the array.


##### File

```typescript
import { PluckPipe } from 'gix-angular-pipes';
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


#### where

Filter an array with a given function or a property shorthand.

##### File

```typescript
import { WherePipe } from 'gix-angular-pipes';
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

###firstOrDefault

This pipe behaves exactly like `where` but only return the first element when is found. A default value can be provided if no
such element exists.


##### File

```typescript
import { FirstOrDefaultPipe } from 'gix-angular-pipes';
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
{{ values | firstOrDefault: aEqualsOne }} <!-- { a: 1, c: { d: 3, e: { f: 4 } }]-->
{{ values | firstOrDefault: ['a', 1] }}   <!-- { a: 1, c: { d: 3, e: { f: 4 } } -->
{{ values | firstOrDefault: ['c.e.f', 4] }}   <!-- { a: 1, c: { d: 3, e: { f: 4 } } -->
{{ numbers | firstOrDefault: 1 }}   <!-- 1 -->
{{ numbers | firstOrDefault: 5 : 42 }}   <!-- 42 -->
{{ numbers | firstOrDefault: 5 }}   <!-- undefined -->
```

#### orderBy

Returns a new ordered array. You can order by multiple properties, ascending and descending.

##### File

```typescript
import { OrderByPipe } from 'gix-angular-pipes';
```

##### Usage

```javascript
const values = [
    { a: 1, b: 2 },
    { a: 2, b: 1 },
    { a: 5, b: 3 },
    { a: 4, b: 8 }
]
```

```html
{{ [1, 4, 3, 2] | orderBy }} <!-- [1, 2, 3, 4] -->
{{ [1, 4, 3, 2] | orderBy: '-' }} <!-- [4, 3, 2, 1] -->
{{ values | orderBy: 'a' }} <!-- Will order the values by a (asc) -->
{{ values | orderBy: '+a' }} <!-- Will order the values by a (asc)-->
{{ values | orderBy: ['a'] }} <!-- Will order the values by a (asc)-->
{{ values | orderBy: '-a' }} <!-- Will order the values by a (desc)-->
{{ values | orderBy: ['-a', 'b'] }} <!-- Will order the values by a (desc) and b (asc) -->
{{ values | orderBy: ['-a', '+b'] }} <!-- Will order the values by a (desc) and b (asc) -->
{{ values | orderBy: ['-a', '-b'] }} <!-- Will order the values by a (desc) and b (desc) -->
```


#### reverse

Returns a reversed array.

##### File

```typescript
import { ReversePipe } from 'gix-angular-pipes';
```

##### Usage

```html
{{ [1, 2, 3, 4] | reverse }} <!-- [4, 3, 2, 1] -->
```


#### count

Returns the length of the collection. Useful when used with other pipes, otherwise, use the `length` property.
Works also for object and string.

##### File

```typescript
import { CountPipe } from 'gix-angular-pipes';
```

##### Usage

```html
{{ [1, 2, 3, 4] | count }} <!-- 4 -->
```


#### some

Returns true if at least one of the item in the collections pass the predicate.

##### File

```typescript
import { SomePipe } from 'gix-angular-pipes';
```

##### Usage

```javascript
const predicate = function (item) {
    return item === 2;
};
```

```html
{{ [1, 2, 3, 4] | some: predicate }} <!-- true -->
{{ [1, 3, 3, 4] | some: predicate }} <!-- false -->
```


#### every

Returns true if every item in the collections pass the predicate.

##### File

```typescript
import { EveryPipe } from 'gix-angular-pipes';
```

##### Usage

```javascript
const predicate = function (item) {
    return item === 2;
};
```

```html
{{ [1, 2, 3, 4] | every: predicate }} <!-- false -->
{{ [2, 2, 2, 2] | every: predicate }} <!-- true -->
```

#### shuffle

Shuffles a collection.

##### File

```typescript
import { ShufflePipe } from 'gix-angular-pipes';
```

##### Usage

```html
{{ [1, 2, 3] | shuffle }} <!-- random order... -->
```

#### take

Take the top `n` items of an array.

##### File

```typescript
import { TakePipe } from 'gix-angular-pipes';
```

##### Usage

```html
{{ [1, 2, 3, 4] | take }} <!-- [1] -->
{{ [1, 2, 3, 4] | take: 2 }} <!-- [1, 2] -->
```


#### takeUntil

Take until the condition is met.

##### File

```typescript
import { TakeUntilPipe } from 'gix-angular-pipes';
```

##### Usage

```typescript
function predicate (item: any) {
  return item >= 4;
}
```

```html
{{ [1, 2, 3, 4] | takeUntil: predicate }} <!-- [1, 2, 3] -->
```

#### takeWhile

Take while the condition is met.

##### File

```typescript
import { TakeWhilePipe } from 'gix-angular-pipes';
```

##### Usage

```typescript
function predicate (item: any) {
  return item < 4;
}
```

```html
{{ [1, 2, 3, 4] | takeWhile }} <!-- [1, 2, 3] -->
```


#### drop

Drop the last `n` items of an array.

##### File

```typescript
import { DropPipe } from 'gix-angular-pipes';
```

##### Usage

```html
{{ [1, 2, 3, 4] | drop }} <!-- [2, 3, 4] -->
{{ [1, 2, 3, 4] | drop: 2 }} <!-- [3, 4] -->
```


#### deep

The `deep` pipe is different from other pipes, it doesn't return new data. It wraps data for other pipes to work
with deep comparaisons.

##### File

```typescript
import { DeepPipe } from 'gix-angular-pipes';
```

##### Usage

```javascript

collection: any[] = [
    { a: 1, b: { c: 2 } },
    { a: 1, b: { c: 2 } },
    { a: 1, b: { c: 3 } },
];

```

```html
{{ collection | uniq }} <!-- The all collection (deep equal not working) -->
{{ collection | deep | uniq }} <!-- [{ a: 1, b: { c: 3 } }] -->
```


#### chunk

The `chunk` pipe breaks the array into multiple, smaller arrays of a given size:

##### File

```typescript
import { ChunkPipe } from 'gix-angular-pipes';
```

##### Usage

```html
{{ [1, 2, 3, 4] | chunk }} <!-- [[1],[2], [3], [4]] -->
{{ [1, 2, 3, 4] | chunk: 2 }} <!-- [[1, 2], [3, 4]] -->
```


#### flatten

The `flatten` flattens an array. It can be used with the `deep` pipe.

##### File

```typescript
import { FlattenPipe } from 'gix-angular-pipes';
```

##### Usage

```html
{{ [[1, 2, 3, 4]] | flatten }} <!-- [1, 2, 3, 4] -->
{{ [[1, 2, 3, [4]] | flatten }} <!-- [1, 2, 3, [4]] -->
{{ [[1, 2, 3, [4]] | deep | flatten }} <!-- [1, 2, 3, 4] -->
```
