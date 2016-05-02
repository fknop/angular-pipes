# 1.6.0 

## New pipes

* `take`
* `drop`
* `deep`

The deep pipe has to be used with other pipes that can work with deep comparaisons.
The pipes working with deep comparaisons (for now) are:
* `uniq`
* `without`

If you need to use deep equal, you can use it like this:

```
{{ collection | deep | uniq }}
```


# 1.5.0

## Breaking change

* Updated to angular2-beta.16. New versions will not work under a lower version than beta.16.

## New pipes

* `pow`
* `sqrt`

## Other

* Closes [#6](https://github.com/fknop/angular-pipes/issues/6)
* Closes [#7](https://github.com/fknop/angular-pipes/issues/7)

# 1.4.0

## New pipes

* `capitalize`
* `upperfirst`
* `template`
* `encodeURI`
* `encodeURIComponent`
* `repeat`
* `truncate`
* `shuffle`
* `random`

# 1.3.0 

## New pipes

* `CountPipe`
* `KeysPipe`
* `EveryPipe`
* `SomePipe`
* `ToArrayPipe`
* `NewlinesPipe`
* `DegreesPipe`
* `RadiansPipe`

## Fixes

Fix immutability for pipes that were updating the original input.

## Other

* Added all the documentation in a separate `docs` folder to keep the `README.md` as clean as possible.

# 1.2.0

## New pipes

* `OrderByPipe`
* `ReversePipe`

## Breaking changes

* When the type of the input is not valid, the input is now returned unchanged.


# 1.1.0

## New pipes

* `WherePipe`
* `NilPipe`
* `PluckPipe`
* `MapPipe`
* `RangePipe`

## New features on existing pipes

* `TypeError` array messages are now more consistent.

## Breaking changes

None.

## Other 

* Added documentation
* Added tests for
    + `replace`
    + `match`
    + `test`