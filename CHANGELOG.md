# 5.0.0

## AoT

* The project is now compiled with `ngc` and should work with `AoT`. Create an issue if you're still having trouble.

## Fixes 

* Fix CountPipe
* Fix EveryPipe test
* Add IsNilPipe to boolean module

## BREAKING CHANGES

* Rename modules (Remove the `2` from `Ng2...`)
  + Angular "2" will now be angular 3 soon with semver, keeping the `2` does not make sense anymore
* Change directory structure
  + The dist folder has been removed. The compiled files are located next to their source.
  + Aggregate pipes are now in their own folder instead of being in the math folder (import change, see docs).


## Tests

* Removed JSPM to keep things simple. It should be easier to contribute.
    + It now use Karma with a simple webpack preprocessor.

# 4.0.0

Support for Angular Final

# 3.0.0

* Update Angular to RC.6
* Remove deprecated tokens.
    + `NG2_PIPES`, `NG2_BOOLEAN_PIPES`, etc.

# 2.2.0

* Update Angular to RC.5
* Add support for `NgModule`
    + Ng2ArrayPipesModule
    + Ng2MathPipesModule
    + Ng2BooleanPipesModule
    + Ng2StringPipesModule
    + Ng2ObjectPipesModule
    + Ng2AggregatePipesModule
    + Ng2PipesModule (imports all the module above)
+ The old token `NG2_PIPES` and the tokens for the categories will be removed for `rc.6` to allow people to migrate easily.
+ The library will keep exporting invidual pipes as we may not need the all category in our application.

# 2.0.0

2.0.0 is mainly an update to angular release candidate with some **breaking changes**.

## Travis CI

* The project now has a Travis CI. It's now easier to contribute with build made for every PR.

## Breaking changes

* Updated to angular 2 RC.
* Moved categories files to src folder, this means:
    + To import a category you now have to do: `import { NG2_STRING_PIPES } from 'angular-pipes/pipes/src/string'` instead of
     `import { NG2_STRING_PIPES } from 'angular-pipes/pipes/string'`
* All the pipes are now **PURE**. This means you have to use `immutability` to update the pipe value. This is a design choice that may be discussed in the future.

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
