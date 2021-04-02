# Object

- [`keys`](#keys)
- [`toArray`](#toarray)
- [`defaults`](#defaults)
- [`toKeyValuePairs`](#tokeyvaluepairs)

You can check the module import [`here`](./modules.md).

#### keys

Returns the array of keys of the given object or array.

##### File

```typescript
import { NgKeysPipeModule } from 'angular-pipes';
```

##### Usage

```javascript
const value = {
  a: 1,
  b: 2,
  c: 3,
};
```

```html
{{ value | keys }}
<!-- ['a', 'b', 'c'] -->
{{ [1, 2, 3] | keys }}
<!-- ['0', '1', '2'] -->
```

#### toArray

Transforms an object to an array

##### File

```typescript
import { NgToArrayPipeModule } from 'angular-pipes';
```

##### Usage

```javascript
const value = {
  a: 1,
  b: 2,
  c: 3,
};
```

```html
{{ value | toArray }}
<!-- [1, 2, 3] -->
```

#### defaults

Apply defaults value to an object or an object in an array.

When applied to an array, the non object values will be left unchanged. The nulls and undefineds will be changed
to the defaults.

##### File

```typescript
import { NgDefaultsPipeModule } from 'angular-pipes';
```

##### Usage

```javascript
const d = {
  a: 1,
  b: 2,
  c: 3,
};

const object = {
  a: 2,
};

const array = [{ a: 2 }, null, { b: 3 }, undefined];
```

```html
{{ object | defaults: d }}
<!-- { a: 2, b: 2, c: 3 } -->
{{ array | defaults: d }}
<!-- [{ a: 2, b: 2, c: 3 }, { a: 1, b: 2, c: 3 }, { a: 1, b: 3, c: 3 }, { a: 1, b: 2, c: 3 }]-->
```

#### toKeyValuePairs

Transforms an object to an array of key-value pairs.

##### File

```typescript
import { NgToKeyValuePairsModule } from 'angular-pipes';
```

##### Usage

```javascript
const value = {
  a: 1,
  b: 2,
  c: 3,
};
```

```html
{{ object | toKeyValuePairs }}
<!-- [{key: 'a', value: 1}, {key: 'b', value: 2}, {key: 'c', value: 3}] -->
```
