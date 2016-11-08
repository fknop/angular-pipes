# Aggregate

* [`min`](#min)
* [`max`](#max)
* [`mean`](#mean)
* [`sum`](#sum)

You can check the module import [`here`](./modules.md).

####min

Returns the minimum of the given array.

##### File

```
import { MinPipe } from 'angular-pipes/src/aggregate/min.pipe';
```

##### Usage

```html
{{ [5, 4, 1, 9] | min }} <!-- 1 -->
```


####max

Returns the maximum of the given array.

##### File

```
import { MaxPipe } from 'angular-pipes/src/aggregate/max.pipe';
```

##### Usage

```html
{{ [5, 4, 1, 9] | max }} <!-- 9 -->
```


####mean

Returns the mean of the given array.

##### File

```
import { MeanPipe } from 'angular-pipes/src/aggregate/mean.pipe';
```

##### Usage

```html
{{ [5, 5, 1, 9] | mean }} <!-- 5 -->
```

####sum

Returns the sum of the given array.

##### File

```
import { SumPipe } from 'angular-pipes/src/aggregate/sum.pipe';
```

##### Usage

```html
{{ [5, 5, 1, 9] | sum }} <!-- 20 -->
```