# Aggregate

* [`groupBy`](#groupby)
* [`min`](#min)
* [`max`](#max)
* [`mean`](#mean)
* [`sum`](#sum)

You can check the module import [`here`](./modules.md).

####groupBy

Returns the groupped data of the given array.

##### File

```typescript
import { GroupByPipe } from 'angular-pipes/src/aggregate/group-by.pipe';
```

##### Usage

```javascript
const values = [
    { name: 'a', prop: 'foo' },
    { name: 'b', prop: 'bar' },
    { name: 'c', prop: 'bar' },
    { name: 'd', prop: 'foo' }
]
```

```html
{{ values | groupBy: 'prop' }}
<!--
	[
		{key: foo, value: Array[2]},
		{key: bar, value: Array[2]}
	]
-->
```


####min

Returns the minimum of the given array.

##### File

```typescript
import { MinPipe } from 'angular-pipes/src/aggregate/min.pipe';
```

##### Usage

```html
{{ [5, 4, 1, 9] | min }} <!-- 1 -->
```


####max

Returns the maximum of the given array.

##### File

```typescript
import { MaxPipe } from 'angular-pipes/src/aggregate/max.pipe';
```

##### Usage

```html
{{ [5, 4, 1, 9] | max }} <!-- 9 -->
```


####mean

Returns the mean of the given array.

##### File

```typescript
import { MeanPipe } from 'angular-pipes/src/aggregate/mean.pipe';
```

##### Usage

```html
{{ [5, 5, 1, 9] | mean }} <!-- 5 -->
```

####sum

Returns the sum of the given array.

##### File

```typescript
import { SumPipe } from 'angular-pipes/src/aggregate/sum.pipe';
```

##### Usage

```html
{{ [5, 5, 1, 9] | sum }} <!-- 20 -->
```