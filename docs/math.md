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
* [`abs`](#abs)
* [`ordinal`](#ordinal)

You can check the module import [`here`](./modules.md).

#### bytes

Returns the bytes to an human-readable format.

##### File

```typescript
import { BytesPipe } from 'gix-angular-pipes';
```

##### Usage

```html
{{ 150 | bytes }} <!-- 150 B -->
{{ 1024 | bytes }} <!-- 1 KB -->
{{ 1048576 | bytes }} <!-- 1 MB -->
{{ 1024 | bytes: 0 : 'KB' }} <!-- 1 MB -->
{{ 1073741824 | bytes }} <!-- 1 GB -->
{{ 1099511627776 | bytes }} <!-- 1 TB -->
{{ 1073741824 | bytes : 0 : 'B' : 'MB' }} <!-- 1024 MB -->
```

##### Todo

* Be able to change the input unit.


#### ceil

Ceils a number with a given precision. Take a look at the official documentation on ceil.

##### File

```typescript
import { CeilPipe } from 'gix-angular-pipes';
```

##### Usage

```html
{{ 3.4 | ceil }} <!-- 4 -->
{{ 1.5 | ceil: 1 }} <!-- 1.5 -->
{{ 1.5444 | ceil: 2 }} <!-- 1.55 -->
```


#### floor

Floor a number with a given precision. Take a look at the official documentation on floor.

##### File

```typescript
import { FloorPipe } from 'gix-angular-pipes';
```

##### Usage

```html
{{ 3.4 | floor }} <!-- 3 -->
{{ 1.5 | floor: 1 }} <!-- 1.5 -->
{{ 1.5444 | floor: 2 }} <!-- 1.54 -->
```


#### round

Rounds a number with a given precision. Take a look at the official documentation on round.

##### File

```typescript
import { RoundPipe } from 'gix-angular-pipes';
```

##### Usage

```html
{{ 3.4 | round }} <!-- 3 -->
{{ 3.5 | round }} <!-- 4 -->
{{ 1.5 | round: 1 }} <!-- 1.5 -->
{{ 1.5444 | round: 2 }} <!-- 1.54 -->
{{ 1.345 | round: 2 }} <!-- 1.35 -->
```


#### degrees

Converts radians to degrees.

##### File

```typescript
import { DegreesPipe } from 'gix-angular-pipes';
```

##### Usage

```javascript
this.value = Math.PI;
```

```html
{{ value | degrees }} <!-- 180 -->
```


#### radians

Converts degrees to radians

##### File

```typescript
import { RadiansPipe } from 'gix-angular-pipes';
```

##### Usage

```html
{{ 180 | radians }} <!-- PI -->
```


#### random

Returns a random number between a minimum (default: 0) and a maximum (default: 1).
The input is ignored.
If only one argument is given, it will be the maximum.

##### File

```typescript
import { RandomPipe } from 'gix-angular-pipes';
```

##### Usage

```html
{{ {} | random: 0: 1 }} <!-- Random number between 0 and 1 -->
{{ {} | random: 0: 10 }} <!-- Random number between 0 and 10 -->
{{ {} | random: 10 }} <!-- Random number between 0 and 10 -->
```

#### sqrt

Returns the square root of a number.

##### File

```typescript
import { SqrtPipe } from 'gix-angular-pipes';
```

##### Usage

```html
{{ 81 | sqrt }} <!-- 9 -->
```

#### pow

Returns the power of a number.

##### File

```typescript
import { PowPipe } from 'gix-angular-pipes';
```

##### Usage

```html
{{ 2 | pow }} <!-- 4 -->
{{ 2 | pow: 3 }} <!-- 8 -->
```

#### abs

Returns the absolute of a number.

##### File

```typescript
import { AbsPipe } from 'gix-angular-pipes';
```

##### Usage

```html
{{ -2 | abs }} <!-- 2 -->
```

#### ordinal

Returns the number with a suffix indicating the ordinal.

##### File

```typescript
import { OrdinalPipe } from 'gix-angular-pipes';
```

##### Usage

```html
{{ 1 | ordinal }} <!-- 1st -->
{{ 523 | ordinal }} <!-- 523rd -->
{{ 15 | ordinal }} <!-- 15th -->
```
