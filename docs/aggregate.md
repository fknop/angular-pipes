# Aggregate

- [`groupBy`](#groupby)
- [`min`](#min)
- [`max`](#max)
- [`mean`](#mean)
- [`sum`](#sum)

You can check the module import [`here`](./modules.md).

#### groupBy

Returns the groupped data of the given array.

##### File

```typescript
import { NgGroupByPipeModule } from 'angular-pipes';
```

##### Usage

```javascript
const values = [
  { name: 'a', prop: 'foo' },
  { name: 'b', prop: 'bar' },
  { name: 'c', prop: 'bar' },
  { name: 'd', prop: 'foo' },
];
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

#### min

Returns the minimum of the given array.

##### File

```typescript
import { NgMinPipeModule } from 'angular-pipes';
```

##### Usage

```html
{{ [5, 4, 1, 9] | min }}
<!-- 1 -->
```

#### max

Returns the maximum of the given array.

##### File

```typescript
import { NgMaxPipeModule } from 'angular-pipes';
```

##### Usage

```html
{{ [5, 4, 1, 9] | max }}
<!-- 9 -->
```

#### mean

Returns the mean of the given array.

##### File

```typescript
import { NgMeanPipeModule } from 'angular-pipes';
```

##### Usage

```html
{{ [5, 5, 1, 9] | mean }}
<!-- 5 -->
```

#### sum

Returns the sum of the given array.

##### File

```typescript
import { NgSumPipeModule } from 'angular-pipes';
```

##### Usage

```html
{{ [5, 5, 1, 9] | sum }}
<!-- 20 -->
```
