"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var IsGreaterPipe = (function () {
    function IsGreaterPipe() {
    }
    IsGreaterPipe.prototype.transform = function (first, _a) {
        var second = _a[0];
        return first > second;
    };
    IsGreaterPipe = __decorate([
        core_1.Pipe({
            name: 'greater'
        }), 
        __metadata('design:paramtypes', [])
    ], IsGreaterPipe);
    return IsGreaterPipe;
}());
exports.IsGreaterPipe = IsGreaterPipe;
var IsGreaterOrEqualPipe = (function () {
    function IsGreaterOrEqualPipe() {
    }
    IsGreaterOrEqualPipe.prototype.transform = function (first, _a) {
        var second = _a[0];
        return first >= second;
    };
    IsGreaterOrEqualPipe = __decorate([
        core_1.Pipe({
            name: 'greaterOrEqual'
        }), 
        __metadata('design:paramtypes', [])
    ], IsGreaterOrEqualPipe);
    return IsGreaterOrEqualPipe;
}());
exports.IsGreaterOrEqualPipe = IsGreaterOrEqualPipe;
var IsLessPipe = (function () {
    function IsLessPipe() {
    }
    IsLessPipe.prototype.transform = function (first, _a) {
        var second = _a[0];
        return first < second;
    };
    IsLessPipe = __decorate([
        core_1.Pipe({
            name: 'less'
        }), 
        __metadata('design:paramtypes', [])
    ], IsLessPipe);
    return IsLessPipe;
}());
exports.IsLessPipe = IsLessPipe;
var IsLessOrEqualPipe = (function () {
    function IsLessOrEqualPipe() {
    }
    IsLessOrEqualPipe.prototype.transform = function (first, _a) {
        var second = _a[0];
        return first <= second;
    };
    IsLessOrEqualPipe = __decorate([
        core_1.Pipe({
            name: 'lessOrEqual'
        }), 
        __metadata('design:paramtypes', [])
    ], IsLessOrEqualPipe);
    return IsLessOrEqualPipe;
}());
exports.IsLessOrEqualPipe = IsLessOrEqualPipe;
var IsEqualPipe = (function () {
    function IsEqualPipe() {
    }
    IsEqualPipe.prototype.transform = function (first, _a) {
        var second = _a[0];
        return first == second;
    };
    IsEqualPipe = __decorate([
        core_1.Pipe({
            name: 'equal'
        }), 
        __metadata('design:paramtypes', [])
    ], IsEqualPipe);
    return IsEqualPipe;
}());
exports.IsEqualPipe = IsEqualPipe;
var IsNotEqualPipe = (function () {
    function IsNotEqualPipe() {
    }
    IsNotEqualPipe.prototype.transform = function (first, _a) {
        var second = _a[0];
        return first != second;
    };
    IsNotEqualPipe = __decorate([
        core_1.Pipe({
            name: 'notEqual'
        }), 
        __metadata('design:paramtypes', [])
    ], IsNotEqualPipe);
    return IsNotEqualPipe;
}());
exports.IsNotEqualPipe = IsNotEqualPipe;
var IsIdenticalPipe = (function () {
    function IsIdenticalPipe() {
    }
    IsIdenticalPipe.prototype.transform = function (first, _a) {
        var second = _a[0];
        return first === second;
    };
    IsIdenticalPipe = __decorate([
        core_1.Pipe({
            name: 'identical'
        }), 
        __metadata('design:paramtypes', [])
    ], IsIdenticalPipe);
    return IsIdenticalPipe;
}());
exports.IsIdenticalPipe = IsIdenticalPipe;
var IsNotIdenticalPipe = (function () {
    function IsNotIdenticalPipe() {
    }
    IsNotIdenticalPipe.prototype.transform = function (first, _a) {
        var second = _a[0];
        return first !== second;
    };
    IsNotIdenticalPipe = __decorate([
        core_1.Pipe({
            name: 'notIdentical'
        }), 
        __metadata('design:paramtypes', [])
    ], IsNotIdenticalPipe);
    return IsNotIdenticalPipe;
}());
exports.IsNotIdenticalPipe = IsNotIdenticalPipe;
exports.NG2_CONDITIONS_PIPES = [
    IsGreaterPipe,
    IsGreaterOrEqualPipe,
    IsLessPipe,
    IsLessOrEqualPipe,
    IsEqualPipe,
    IsNotEqualPipe,
    IsIdenticalPipe,
    IsNotIdenticalPipe
];
//# sourceMappingURL=conditions.pipe.js.map