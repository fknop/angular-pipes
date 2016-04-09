# Object

* [`keys`](#keys)
* [`toArray`](#toArray)


####keys

Returns the array of keys of the given object or array.

##### File

```
import { KeysPipe } from 'angular-pipes/pipes/src/object/keys.pipe';
```

##### Usage

```javascript
const value = {
    a: 1,
    b: 2,
    c: 3
};

```

```html
{{ value | keys }} <!-- ['a', 'b', 'c'] -->
{{ [1, 2, 3] | keys }} <!-- ['0', '1', '2'] -->
```

####keys

Transforms an object to an array

##### File

```
import { ToArrayPipe } from 'angular-pipes/pipes/src/object/to-array.pipe';
```

##### Usage

```javascript
const value = {
    a: 1,
    b: 2,
    c: 3
};

```

```html
{{ value | toArray }} <!-- [1, 2, 3] -->
```
