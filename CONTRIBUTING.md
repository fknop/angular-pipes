# Contributing Guide

This document shows you how to contribute to the project.

## Dependencies

Make sure you have the following dependencies on your machine:

* `Node.js`
* `npm`
* `Git`

## Installation

Get the source by cloning the repository:

```
$ git clone https://github.com/fknop/angular-pipes
```

Navigate to the project folder and install the dependencies via:

```
$ npm install
```

## Testing

The tests are run with `jasmine` and a simple web page for now. If someone wants to take the time
to do automated tests with `Karma`, I'll be glad to accept a PR.

```
$ npm test
```

## Building

Contributing to the project does not require compiling the code into javascript. But if you want to:

```
$ npm run prepublish
```

## Submitting changes

* Checkout a new branch based on `master` and name it with the new feature / fix you want to do.
    + `$ git checkout -b BRANCH_NAME`
    + Use one branch per fix / feature
* Make your changes
    + Make sure you have correctly exported the pipe
    + Make sure to provide unit tests
    + Run your tests with `npm test`