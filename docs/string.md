# String

* [`leftpad`](#leftpad)
* [`rightpad`](#rightpad)
* [`pad`](#pad)
* [`trim`](#trim)
* [`split`](#split)
* [`replace`](#replace)
* [`match`](#match)
* [`test`](#test)
* [`newlines`](#newlines)


####leftpad

Returns a left-padded string.

##### File

```
import { LeftPadPipe } from 'angular-pipes/pipes/src/string/left-pad.pipe';
```

##### Usage

```html
{{ 'aaa' | leftpad: 4 }} <!-- ' aaa' -->
{{ 'aaa' | leftpad: 3 }} <!-- 'aaa' -->
{{ 'aaa' | leftpad: 5: 'b' }} <!-- 'bbaaa' -->
```


####rightpad

Returns a right-padded string.

##### File

```
import { RightPadPipe } from 'angular-pipes/pipes/src/string/right-pad.pipe';
```

##### Usage

```html
{{ 'aaa' | rightpad: 4 }} <!-- 'aaa ' -->
{{ 'aaa' | rightpad: 3 }} <!-- 'aaa' -->
{{ 'aaa' | rightpad: 5: 'b' }} <!-- 'aaabb' -->
```

####rightpad

Returns a padded string. It starts with left and then right.

##### File

```
import { PadPipe } from 'angular-pipes/pipes/src/string/pad.pipe';
```

##### Usage

```html
{{ 'aaa' | pad: 4 }} <!-- ' aaa' -->
{{ 'aaa' | pad: 5 }} <!-- ' aaa ' -->
{{ 'aaa' | pad: 5: 'b' }} <!-- 'baaab' -->
```


####trim

Trims the string.

##### File

```
import { TrimPipe } from 'angular-pipes/pipes/src/string/trim.pipe';
```

##### Usage

```html
{{ 'aaa' | trim }} <!-- 'aaa' -->
{{ 'aaa ' | trim }} <!-- 'aaa' -->
{{ '   aaa       ' | trim }} <!-- 'aaa' -->
```


####split

Split a string into an array.

##### File

```
import { SplitPipe } from 'angular-pipes/pipes/src/string/split.pipe';
```

##### Usage

```html
{{ 'Hello World' | split }} <!-- ['Hello', 'World'] -->
{{ 'ABABA' | split: 'B' }} <!-- ['A', 'A', 'A'] -->
{{ 'ABABA' | split: 'B': 2 }} <!-- ['A', 'A'] -->
```


####replace

This is the `String#replace()` function, if you want to know more about the arguments, check the official documentation.

##### File

```
import { ReplacePipe } from 'angular-pipes/pipes/src/string/replace.pipe';
```


####match

This is the `String#match()` function, if you want to know more about the arguments, check the official documentation.

##### File

```
import { MatchPipe } from 'angular-pipes/pipes/src/string/match.pipe';
```


####test

This is the `String#test()` function, if you want to know more about the arguments, check the official documentation.

##### File

```
import { TestPipe } from 'angular-pipes/pipes/src/string/test.pipe';
```


####newlines

Replaces the `\n`, `\r` and `\r\n` into `<br />`. This function returns HTML so you need to use it
with the `[innerHTML]` binding.

##### File

```
import { NewlinesPipe } from 'angular-pipes/pipes/src/string/newlines.pipe';
```


##### Usage

```javascript
this.value = 'Hello, World. \nHow are you ?';
```

```html
<span [innerHTML]="value"></span>

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
