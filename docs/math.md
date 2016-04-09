# Math

* [`bytes`](#bytes)
* [`ceil`](#ceil)
* [`floor`](#floor)
* [`round`](#round)
* [`min`](#min)
* [`max`](#max)
* [`mean`](#mean)
* [`sum`](#sum)
* [`degrees`](#degrees)
* [`radians`](#degrees)


####bytes

Returns the bytes to an human-readable format.

##### File

```
import { BytesPipe } from 'angular-pipes/pipes/src/math/bytes.pipe';
```

##### Usage

```html
{{ 150 | bytes }} <!-- 150 B -->
{{ 1024 | bytes }} <!-- 1 KB -->
{{ 1048576 | bytes }} <!-- 1 MB -->
{{ 1073741824 | bytes }} <!-- 1 GB -->
```

##### Todo 

* Be able to change the input unit.


####ceil

Ceils a number with a given precision. Take a look at the official documentation on ceil.

##### File

```
import { CeilPipe } from 'angular-pipes/pipes/src/math/ceil.pipe';
```

##### Usage

```html
{{ 3.4 | ceil }} <!-- 4 -->
{{ 1.5 | ceil: 1 }} <!-- 1.5 -->
{{ 1.5444 | ceil: 2 }} <!-- 1.55 -->
```


####floor

Floor a number with a given precision. Take a look at the official documentation on floor.

##### File

```
import { FloorPipe } from 'angular-pipes/pipes/src/math/floor.pipe';
```

##### Usage

```html
{{ 3.4 | floor }} <!-- 3 -->
{{ 1.5 | floor: 1 }} <!-- 1.5 -->
{{ 1.5444 | floor: 2 }} <!-- 1.54 -->
```


####round

Rounds a number with a given precision. Take a look at the official documentation on round.

##### File

```
import { RoundPipe } from 'angular-pipes/pipes/src/math/round.pipe';
```

##### Usage

```html
{{ 3.4 | round }} <!-- 3 -->
{{ 3.5 | round }} <!-- 4 -->
{{ 1.5 | round: 1 }} <!-- 1.5 -->
{{ 1.5444 | round: 2 }} <!-- 1.54 -->
{{ 1.345 | round: 2 }} <!-- 1.35 -->
```


####min

Returns the minimum of the given array.

##### File

```
import { MinPipe } from 'angular-pipes/pipes/src/math/min.pipe';
```

##### Usage

```html
{{ [5, 4, 1, 9] | min }} <!-- 1 -->
```


####max

Returns the maximum of the given array.

##### File

```
import { MaxPipe } from 'angular-pipes/pipes/src/math/max.pipe';
```

##### Usage

```html
{{ [5, 4, 1, 9] | max }} <!-- 9 -->
```


####mean

Returns the mean of the given array.

##### File

```
import { MeanPipe } from 'angular-pipes/pipes/src/math/mean.pipe';
```

##### Usage

```html
{{ [5, 5, 1, 9] | max }} <!-- 5 -->
```

####sum

Returns the sum of the given array.

##### File

```
import { SumPipe } from 'angular-pipes/pipes/src/math/sum.pipe';
```

##### Usage

```html
{{ [5, 5, 1, 9] | max }} <!-- 20 -->
```


####degrees

Converts radians to degrees.

##### File

```
import { DegreesPipe } from 'angular-pipes/pipes/src/math/degrees.pipe';
```

##### Usage

```javascript
this.value = Math.PI;
``` 

```html
{{ value | degrees }} <!-- 180 -->
```


####radians

Converts degrees to radians

##### File

```
import { RadiansPipe } from 'angular-pipes/pipes/src/math/radians.pipe';
```

##### Usage

```html
{{ 180 | radians }} <!-- PI -->
```