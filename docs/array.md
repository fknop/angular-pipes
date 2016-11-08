# Collections (array)

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
* [`orderBy`](#orderby) 
* [`reverse`](#reverse)
* [`count`](#count) 
* [`some`](#some) 
* [`every`](#every)
* [`shuffle`](#shuffle)
* [`take`](#take)
* [`drop`](#drop)
* [`deep`](#deep)
* [`chunk`](#chunk)

You can check the module import [`here`](./modules.md).

####empty

Returns true if the collection is empty.

##### File

```
import { EmptyPipe } from 'angular-pipes/src/array/empty.pipe';
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
import { HeadPipe } from 'angular-pipes/src/array/head.pipe';
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
import { InitialPipe } from 'angular-pipes/src/array/initial.pipe';
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
import { JoinPipe } from 'angular-pipes/src/array/join.pipe';
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
import { LastPipe } from 'angular-pipes/src/array/last.pipe';
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
import { TailPipe } from 'angular-pipes/src/array/tail.pipe';
```

##### Usage

```html
{{ [] | tail }} <!-- [] -->
{{ ['a', 'b', 'c'] | tail }} <!-- ['b', 'c'] -->
```


####uniq

Returns the collection keeping only one duplicate.

##### File

```
import { UniqPipe } from 'angular-pipes/src/array/uniq.pipe';
```

##### Usage

```html
{{ [] | uniq }} <!-- [] -->
{{ ['a', 'b', 'a'] | uniq }} <!-- ['a', 'b'] -->
```

####without

Returns the collection without the specified elements.

##### File

```
import { WithoutPipe } from 'angular-pipes/src/array/without.pipe';
```

##### Usage

```html
{{ [1, 2, 3] | without: [1, 3] }} <!-- [2] -->
```

####range

Returns a range of number with a given size (`default: 0`) and start (`default: 1`).

The value on the left hand size does not matter, it is ignored.

##### File

```
import { RangePipe } from 'angular-pipes/src/array/range.pipe';
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
import { MapPipe } from 'angular-pipes/src/array/map.pipe';
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
import { PluckPipe } from 'angular-pipes/src/array/pluck.pipe';
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
import { WherePipe } from 'angular-pipes/src/array/where.pipe';
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

####orderBy

Returns a new ordered array. You can order by multiple properties, ascending and descending.

##### File

```
import { OrderByPipe } from 'angular-pipes/src/array/order-by.pipe';
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
{{ values | orderBy: ['-a', 'b'] }} <!-- Will order the values by a (desc)-->
{{ values | orderBy: ['-a', 'b'] }} <!-- Will order the values by a (desc) and b (asc) -->
{{ values | orderBy: ['-a', '+b'] }} <!-- Will order the values by a (desc) and b (asc) -->
{{ values | orderBy: ['-a', '-b'] }} <!-- Will order the values by a (desc) and b (desc) -->
```


####reverse

Returns a reversed array.

##### File

```
import { ReversePipe } from 'angular-pipes/src/array/reverse.pipe';
```

##### Usage

```html
{{ [1, 2, 3, 4] | reverse }} <!-- [4, 3, 2, 1] -->
```


####count

Returns the length of the collection. Useful when used with other pipes, otherwise, use the `length` property.
Works also for object and string.

##### File

```
import { CountPipe } from 'angular-pipes/src/array/count.pipe';
```

##### Usage

```html
{{ [1, 2, 3, 4] | count }} <!-- 4 -->
```


####some

Returns true if at least one of the item in the collections pass the predicate.

##### File

```
import { SomePipe } from 'angular-pipes/src/array/some.pipe';
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


####every

Returns true if every item in the collections pass the predicate.

##### File

```
import { EveryPipe } from 'angular-pipes/src/array/every.pipe';
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

####shuffle

Shuffles a collection.

##### File

```
import { ShufflePipe } from 'angular-pipes/src/array/shuffle.pipe';
```

##### Usage

```html
{{ [1, 2, 3] | shuffle }} <!-- random order... -->
```

####take

Take the top `n` items of an array.

##### File

```
import { TakePipe } from 'angular-pipes/src/array/take.pipe';
```

##### Usage

```html
{{ [1, 2, 3, 4] | take }} <!-- [1] -->
{{ [1, 2, 3, 4] | take: 2 }} <!-- [1, 2] -->
```

####drop

Drop the last `n` items of an array.

##### File

```
import { DropPipe } from 'angular-pipes/src/array/drop.pipe';
```

##### Usage

```html
{{ [1, 2, 3, 4] | drop }} <!-- [2, 3, 4] -->
{{ [1, 2, 3, 4] | drop: 2 }} <!-- [3, 4] -->
```


####deep

The `deep` pipe is different from other pipes, it doesn't return new data. It wraps data for other pipes to work 
with deep comparaisons.

##### File

```
import { DeepPipe } from 'angular-pipes/src/array/deep.pipe';
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


####chunk

The `chunk` pipe breaks the array into multiple, smaller arrays of a given size:

##### File

```
import { ChunkPipe } from 'angular-pipes/src/array/chunk.pipe';
```

##### Usage

```html
{{ [1, 2, 3, 4] | chunk }} <!-- [[1],[2], [3], [4]] -->
{{ [1, 2, 3, 4] | chunk: 2 }} <!-- [[1, 2], [3, 4]] -->
```