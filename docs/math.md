# Math

* [`bytes`](#bytes)
* [`ceil`](#ceil)
* [`floor`](#floor)
* [`round`](#round)
* [`degrees`](#degrees)
* [`radians`](#degrees)
* [`random`](#random) 
* [`pow`](#pow) 
* [`sqrt`](#sqrt)

You can check the module import [`here`](./modules.md).

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


####random

Returns a random number between a minimum (default: 0) and a maximum (default: 1).
The input is ignored.
If only one argument is given, it will be the maximum.

##### File

```
import { RandomPipe } from 'angular-pipes/pipes/src/math/random.pipe';
```

##### Usage

```html
{{ {} | random: 0: 1 }} <!-- Random number between 0 and 1 -->
{{ {} | random: 0: 10 }} <!-- Random number between 0 and 10 -->
{{ {} | random: 10 }} <!-- Random number between 0 and 10 -->
```

####sqrt

Returns the square root of a number.

##### File

```
import { SqrtPipe } from 'angular-pipes/pipes/src/math/sqrt.pipe';
```

##### Usage

```html
{{ 81 | sqrt }} <!-- 9 -->
```

####pow

Returns the power of a number.

##### File

```
import { PowPipe } from 'angular-pipes/pipes/src/math/pow.pipe';
```

##### Usage

```html
{{ 2 | pow }} <!-- 4 -->
{{ 2 | pow: 3 }} <!-- 8 -->
```