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
* [`slugify`](#slugify)
* [`stripTags`](#striptags) 
* [`latinize`](#latinize)
* [`wrap`](#wrap)
* [`with`](#with)

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
import { SlugifyPipe } from 'angular-pipes/src/string/slugify.pipe';
```

##### Usage

```html
{{ 'The zombie world war began' | slugify }} <!-- 'the-zombie-world-war-began' -->
```
<<<<<<< HEAD

####striptags

strip out html tags from string
**Important: this Pipe jobs it's not to replace innerHtml directive, it's only for tiny plain text**


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

####wrap
Wrap a string with another string 

Arguments: ( string, string, string[optional] )

##### File

```
import { WrapPipe } from 'angular-pipes/src/string/wrap.pipe';
```

##### Usage

```html
<p>{{ 'foo' | wrap: '/' }}</p> <!--result: /foo/ -->
<p>{{ 'foo' | wrap: '{{': '}}' }}</p> <!--result: {{foo}} -->
```

####with
With pipe check string has start and/or ends

Arguments: ( string, start[optional], ends[optional], case-sensitive[optional] )

##### File

```
import { WithPipe } from 'angular-pipes/src/string/with.pipe';
```

##### Usage

```html
{{'The Flash Reverse' | with: 'The',null, true}} <!-- result: true -->
{{'The Flash Reverse' | with: 'The','Reverse',true}} <!-- result: true-->
{{'The Flash Reverse' | with: 'The','Reverse'}} <!-- result: true-->
{{'The Flash Reverse' | with: 'the','reverse'}} <!-- result: true-->
{{'The Flash Reverse' | with: 'the','Reverse',true}} <!-- result: false-->
{{'The Flash Reverse' | with: 'the','reverse',true}} <!-- result: false-->
{{'The Flash Reverse' | with: 'Blue','Reverse',true}} <!-- result: false-->
{{'The Flash Reverse' | with: 'The','Black',true}} <!-- result: false-->
{{'The Flash Reverse' | with: '','Black',true}} <!-- result: false-->
{{'The Flash Reverse' | with: '','',true}} <!-- result: 'The Flash Reverse'-->
{{'The Flash Reverse' | with: null,null,true}} <!-- result: 'The Flash Reverse'-->
{{'The Flash Reverse' | with: null,null}} <!-- result: 'The Flash Reverse'-->
{{'The Flash Reverse' | with}} <!-- result: 'The Flash Reverse'-->
```
