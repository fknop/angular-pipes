# String

## Note - replace angular-pipes by gix-angular-pipes

* [`leftpad`](#leftpad)
* [`rightpad`](#rightpad)
* [`pad`](#pad)
* [`trim`](#trim)
* [`split`](#split)
* [`replace`](#replace)
* [`match`](#match)
* [`test`](#test)
* [`newlines`](#newlines)
* [`capitalize`](#capitalize)
* [`upperfirst`](#upperfirst)
* [`template`](#template)
* [`encodeURI`](#encodeuri)
* [`encodeURIComponent`](#encodeuricomponent)
* [`decodeURI`](#decodeuri)
* [`decodeURIComponent`](#decodeuricomponent)
* [`repeat`](#repeat)
* [`truncate`](#truncate)
* [`slugify`](#slugify)
* [`stripTags`](#striptags)
* [`latinize`](#latinize)
* [`wrap`](#wrap)
* [`with`](#with)
* [`reverseStr`](#reversestr)
* [`dt2age`](#dt2age)

You can check the module import [`here`](./modules.md).

#### leftpad

Returns a left-padded string.

##### File

```typescript
import { LeftPadPipe } from 'gix-angular-pipes';
```

##### Usage

```html
{{ 'aaa' | leftpad: 4 }} <!-- ' aaa' -->
{{ 'aaa' | leftpad: 3 }} <!-- 'aaa' -->
{{ 'aaa' | leftpad: 5: 'b' }} <!-- 'bbaaa' -->
```

#### rightpad

Returns a right-padded string.

##### File

```typescript
import { RightPadPipe } from 'gix-angular-pipes';
```

##### Usage

```html
{{ 'aaa' | rightpad: 4 }} <!-- 'aaa ' -->
{{ 'aaa' | rightpad: 3 }} <!-- 'aaa' -->
{{ 'aaa' | rightpad: 5: 'b' }} <!-- 'aaabb' -->
```

#### pad

Returns a padded string. It starts with left and then right.

##### File

```typescript
import { PadPipe } from 'gix-angular-pipes';
```

##### Usage

```html
{{ 'aaa' | pad: 4 }} <!-- ' aaa' -->
{{ 'aaa' | pad: 5 }} <!-- ' aaa ' -->
{{ 'aaa' | pad: 5: 'b' }} <!-- 'baaab' -->
```

#### trim

Trims the string.

##### File

```typescript
import { TrimPipe } from 'gix-angular-pipes';
```

##### Usage

```html
{{ 'aaa' | trim }} <!-- 'aaa' -->
{{ 'aaa ' | trim }} <!-- 'aaa' -->
{{ '   aaa       ' | trim }} <!-- 'aaa' -->
```

#### split

Split a string into an array.

##### File

```typescript
import { SplitPipe } from 'gix-angular-pipes';
```

##### Usage

```html
{{ 'Hello World' | split }} <!-- ['Hello', 'World'] -->
{{ 'ABABA' | split: 'B' }} <!-- ['A', 'A', 'A'] -->
{{ 'ABABA' | split: 'B': 2 }} <!-- ['A', 'A'] -->
```

#### replace

This is the `String#replace()` function, if you want to know more about the arguments, check the official documentation.

##### File

```typescript
import { ReplacePipe } from 'gix-angular-pipes';
```

#### match

This is the `String#match()` function, if you want to know more about the arguments, check the official documentation.

##### File

```typescript
import { MatchPipe } from 'gix-angular-pipes';
```

#### test

This is the `String#test()` function, if you want to know more about the arguments, check the official documentation.

##### File

```typescript
import { TestPipe } from 'gix-angular-pipes';
```

#### newlines

Replaces the `\n`, `\r` and `\r\n` into `<br />`. This function returns HTML so you need to use it  
with the `[innerHTML]` binding.

##### File

```typescript
import { NewlinesPipe } from 'gix-angular-pipes';
```

##### Usage

```javascript
this.value = 'Hello, World. \nHow are you ?';
```

```html
<span [innerHTML]="value | newlines"></span>

<!-- Resulting dom
<span>
    Hello, World. <br /> How are you ?
</span>
-->

<!-- Resulting display
Hello, World.
How are you ?
-->
```

#### capitalize

Capitalize the string. If the argument is true, all the words will be capitalized.

##### File

```typescript
import { CapitalizePipe } from 'gix-angular-pipes';
```

##### Usage

```html
{{ 'hello world' | capitalize }} <!-- 'Hello world' -->
{{ 'hello world' | capitalize: true }} <!-- 'Hello World' -->
{{ 'hELLo wOrld' | capitalize: true }} <!-- 'Hello World' -->
```

#### upperfirst

Uppercase the first letter.

##### File

```typescript
import { UpperFirstPipe } from 'gix-angular-pipes';
```

##### Usage

```html
{{ 'hello world' | upperfirst }} <!-- 'Hello world' -->
```

#### template

Template string.

##### File

```typescript
import { TemplatePipe } from 'gix-angular-pipes';
```

##### Usage

```html
{{ "Hello $1, it's $2" | template: 'world': 'me' }} <!-- 'Hello world, it's me' -->
```

#### encodeuri

The encodeURI function.

##### File

```typescript
import { EncodeURIPipe } from 'gix-angular-pipes';
```

#### encodeuricomponent

The encodeURIComponent function.

##### File

```typescript
import { EncodeURIComponentPipe } from 'gix-angular-pipes';
```

#### decodeuri

The decodeURI function.

##### File

```typescript
import { DecodeURIPipe } from 'gix-angular-pipes';
```

#### decodeuricomponent

The decodeURIComponent function.

##### File

```typescript
import { DecodeURIComponentPipe } from 'gix-angular-pipes';
```

#### repeat

Repeats a string.

##### File

```typescript
import { RepeatPipe } from 'gix-angular-pipes';
```

##### Usage

```html
{{ 'a' | repeat: 2 }} <!-- 'aa' -->
{{ 'a' | repeat: 2: 'b' }} <!-- 'aba' -->
```

#### truncate

Truncate a string.

Arguments: \(size, suffix, preserve\)

##### File

```typescript
import { TruncatePipe } from 'gix-angular-pipes';
```

##### Usage

```html
{{ 'Hello World' | truncate: 4 }} <!-- 'Hell' -->
{{ 'Hello World' | truncate: 4: '': true }} <!-- 'Hello' -->
{{ 'Hello World' | truncate: 4: '...': true }} <!-- 'Hello...' -->
{{ 'Hello World, how is it going?' | truncate: 14: '...': true }} <!-- 'Hello World, how...' -->
```

#### slugify

Slugify a string.

Arguments: \(string\)

##### File

```typescript
import { SlugifyPipe } from 'gix-angular-pipes';
```

##### Usage

```html
{{ 'The zombie world war began' | slugify }} <!-- 'the-zombie-world-war-began' -->
```

#### striptags

strip out html tags from string  
**Important: this Pipe jobs it's not to replace innerHtml directive, it's only for tiny plain text**

Arguments: \( string, ends, case-sensitive\[optional\] \)

##### File

```typescript
import { StripTagsPipe } from 'gix-angular-pipes';
```

##### Usage

```html
var text = '<p class="paragraph">Lorem Ipsum is simply dummy text of the printing...</p>';
<p>{{ text | stripTags }}</p>
<!--result: Lorem Ipsum is simply dummy text of the printing... -->
```

#### latinize

Remove accents/diacritics from a string

##### File

```typescript
import { latinize } from 'gix-angular-pipes';
```

##### Usage

```html
 {{ 'Sòme strÏng with Âccénts' | latinize }}
<!-- result: Some strIng with Accents -->
```

#### wrap

Wrap a string with another string

Arguments: \( string, string, string\[optional\] \)

##### File

```typescript
import { WrapPipe } from 'gix-angular-pipes';
```

##### Usage

```html
<p>{{ 'foo' | wrap: '/' }}</p> <!--result: /foo/ -->
<p>{{ 'foo' | wrap: '{{': '}}' }}</p> <!--result: {{foo}} -->
```

#### with

With pipe check string has start and/or ends

Arguments: \( string, start\[optional\], ends\[optional\], case-sensitive\[optional\] \)

##### File

```typescript
import { WithPipe } from 'gix-angular-pipes';
```

##### Usage

```html
{{'The Flash Reverse' | with: 'The' : null, true}} <!-- result: true -->
{{'The Flash Reverse' | with: 'The' : 'Reverse' : true}} <!-- result: true-->
{{'The Flash Reverse' | with: 'The' : 'Reverse'}} <!-- result: true-->
{{'The Flash Reverse' | with: 'the' : 'reverse'}} <!-- result: true-->
{{'The Flash Reverse' | with: 'the' : 'Reverse' : true}} <!-- result: false-->
{{'The Flash Reverse' | with: 'the' : 'reverse' : true}} <!-- result: false-->
{{'The Flash Reverse' | with: 'Blue' : 'Reverse' : true}} <!-- result: false-->
{{'The Flash Reverse' | with: 'The' : 'Black' : true}} <!-- result: false-->
{{'The Flash Reverse' | with: '' : 'Black' : true}} <!-- result: false-->
{{'The Flash Reverse' | with: '' : '' : true}} <!-- result: 'The Flash Reverse'-->
{{'The Flash Reverse' | with: null : null : true}} <!-- result: 'The Flash Reverse'-->
{{'The Flash Reverse' | with: null : null}} <!-- result: 'The Flash Reverse'-->
{{'The Flash Reverse' | with}} <!-- result: 'The Flash Reverse'-->
```

#### reversestr

Reverse a string.

##### File

```typescript
import { ReverseStrPipe } from 'gix-angular-pipes';
```

##### Usage

```html
{{ 'hello world' | reverseStr }} <!-- 'dlrow olleh' -->
```




#### dt2age

Date string to age.

##### File

```typescript
import { Dt2agePipe } from 'gix-angular-pipes';
```

##### Usage

```html
{{ '1976-05-13' | dt2age }} <!-- '42' -->
```
