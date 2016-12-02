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
* [`slugfy`](#slugfy) 
* [`endsWith`](#endsWith) 
* [`stripTags`](#stripTags) 
* [`latinize`](#latinize)
* [`startWith`](#startWith)
* [`stringular`](#stringular)
* [`wrap`](#wrap)

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

####slugify

Slugify a string. 

Arguments: (string)

##### File

```
import { SlugifyPipe } from 'angular-pipes/src/string/slugfy.pipe';
```

##### Usage

```html
{{ 'The zombie world war began' | slugify }} <!-- 'the-zombie-world-war-began' -->
```

####endsWith

return whether string ends with the ends parameter.

Arguments: ( string, ends, case-sensitive[optional] )

##### File

```
import { EndsWithPipe } from 'angular-pipes/src/string/endsWith.pipe';
```

##### Usage

```html
{{ 'image.JPG' | endsWith: '.jpg' }} <!-- result: True -->
{{ 'image.JPG' | endsWith: '.jpg': true }} <!-- result: False -->
```

####stripTags

strip out html tags from string
**Important: this Pipe jobs it's not to replace ng-bind-html directive, it's only for tiny plain text


Arguments: ( string, ends, case-sensitive[optional] )

##### File

```
import { StripTagsPipe } from 'angular-pipes/src/string/strip-tags.pipe';
```

##### Usage

```html
var text = '<p class="paragraph">Lorem Ipsum is simply dummy text of the printing...</p>';
<p>{{ text | stripTags }}</p>
<!--result: Lorem Ipsum is simply dummy text of the printing... -->
```

####latinize

Remove accents/diacritics from a string

##### File

```
import { latinize } from 'angular-pipes/src/string/latinize.pipe';
```

##### Usage

```html
 {{ 'Sòme strÏng with Âccénts' | latinize }}
<!-- result: Some strIng with Accents -->
```

####startWith

Return whether string starts with the starts parameter.
   
Arguments: ( 'start': case-sensitive[optional] )

##### File

```
import { StartWith } from 'angular-pipes/src/string/start-with.pipe';
```

##### Usage

```html
{{ 'Lorem ipsum' | startsWith: 'lorem' }}<!--result:true -->
{{ 'Lorem Ipsum' | startsWith: 'lorem': true }}<!--result:false -->
```

####stringular
get string with {n} and replace match with enumeration values

Arguments: ( string )

##### File

```
import { StringularPipe } from 'angular-pipes/src/string/stringular.pipe';
```

##### Usage

```html
<p>{{ 'The {0} world {1} began' | stringular:'zombie':'war' }}</p> <!-- result: <p>The zombie world war began</p> -->
<p>{{ '{3} {0} world {1} began' | stringular:'zombie':'war':null:'The' }}</p> <!-- result: <p>The zombie world war began</p> -->
<p>{{ 'The {0} world war began' | stringular }}<p> <!--result: <p>The {0} world war began</p> -->
```

####wrap
Wrap a string with another string
usage: string | wrap: string: string[optional]

Arguments: ( string: string[optional] )

##### File

```
import { WrapPipe } from 'angular-pipes/src/string/wrap.pipe';
```

##### Usage

```html
<p>{{ 'foo' | wrap: '/' }}</p> <!--result: /foo/ -->
<p>{{ 'foo' | wrap: '{{': '}}' }}</p> <!--result: {{foo}} -->
```