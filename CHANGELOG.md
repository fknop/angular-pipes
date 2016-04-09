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