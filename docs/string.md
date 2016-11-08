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
* [`capitalize`](#capitalize) 
* [`upperfirst`](#upperfirst) 
* [`template`](#template) 
* [`encodeURI`](#encodeuri) 
* [`encodeURIComponent`](#encodeuricomponent) 
* [`repeat`](#repeat) 
* [`truncate`](#truncate) 

You can check the module import [`here`](./modules.md).

####leftpad

Returns a left-padded string.

##### File

```
import { LeftPadPipe } from 'angular-pipes/src/string/left-pad.pipe';
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
import { RightPadPipe } from 'angular-pipes/src/string/right-pad.pipe';
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
import { PadPipe } from 'angular-pipes/src/string/pad.pipe';
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
import { TrimPipe } from 'angular-pipes/src/string/trim.pipe';
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
import { SplitPipe } from 'angular-pipes/src/string/split.pipe';
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
import { ReplacePipe } from 'angular-pipes/src/string/replace.pipe';
```


####match

This is the `String#match()` function, if you want to know more about the arguments, check the official documentation.

##### File

```
import { MatchPipe } from 'angular-pipes/src/string/match.pipe';
```


####test

This is the `String#test()` function, if you want to know more about the arguments, check the official documentation.

##### File

```
import { TestPipe } from 'angular-pipes/src/string/test.pipe';
```


####newlines

Replaces the `\n`, `\r` and `\r\n` into `<br />`. This function returns HTML so you need to use it
with the `[innerHTML]` binding.

##### File

```
import { NewlinesPipe } from 'angular-pipes/src/string/newlines.pipe';
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


####capitalize

Capitalize the string. If the argument is true, all the words will be capitalized.

##### File

```
import { CapitalizePipe } from 'angular-pipes/src/string/capitalize.pipe';
```

##### Usage

```html
{{ 'hello world' | capitalize }} <!-- 'Hello world' -->
{{ 'hello world' | capitalize: true }} <!-- 'Hello World' -->
{{ 'hELLo wOrld' | capitalize: true }} <!-- 'Hello World' -->
```


####upperfirst

Uppercase the first letter.

##### File

```
import { UpperFirstPipe } from 'angular-pipes/src/string/upperfirst.pipe';
```

##### Usage

```html
{{ 'hello world' | upperfirst }} <!-- 'Hello world' -->
```


####template

Template string.

##### File

```
import { TemplatePipe } from 'angular-pipes/src/string/template.pipe';
```

##### Usage

```html
{{ "Hello $1, it's $2" | template: 'world': 'me' }} <!-- 'Hello world, it's me' -->
```


####encodeuri

The encodeURI function.

##### File

```
import { EncodeURIPipe } from 'angular-pipes/src/string/encode-uri.pipe';
```


####encodeuricomponent

The encodeURIComponent function.

##### File

```
import { EncodeURIComponentPipe } from 'angular-pipes/src/string/encode-uri-component.pipe';
```

####repeat

Repeats a string.

##### File

```
import { RepeatPipe } from 'angular-pipes/src/string/repeat.pipe';
```

##### Usage

```html
{{ 'a' | repeat: 2 }} <!-- 'aa' -->
{{ 'a' | repeat: 2: 'b' }} <!-- 'aba' -->
```

####truncate

Truncate a string. 

Arguments: (size, suffix, preserve)

##### File

```
import { TruncatePipe } from 'angular-pipes/src/string/truncate.pipe';
```

##### Usage

```html
{{ 'Hello World' | truncate: 4 }} <!-- 'Hell' -->
{{ 'Hello World' | truncate: 4: '', true }} <!-- 'Hello' -->
{{ 'Hello World' | truncate: 4: '...', true }} <!-- 'Hello...' -->
{{ 'Hello World, how is it going?' | truncate: 14: '...', true }} <!-- 'Hello World, how...' -->
```
